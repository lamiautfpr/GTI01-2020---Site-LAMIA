/* Idei.a LAMIA 2026 — camada de dados.
   Funciona offline (localStorage) e, quando um backend está configurado,
   sincroniza o mesmo conteúdo com o banco de dados remoto.

   Contrato completo em SPEC.md. Resumo:
     IdeiaData.load()                  -> estado atual (sincrono, vem do cache)
     IdeiaData.save(estado)            -> grava local + enfileira envio ao backend
     IdeiaData.pull()                  -> Promise, busca o estado no backend
     IdeiaData.uploadImagem(file, ctx) -> Promise<url>, sobe a imagem e devolve a URL
     IdeiaData.config()/setConfig(c)   -> endpoint e chave do backend
     IdeiaData.status()                -> { modo, online, pendente, ultimoErro, ultimaSync }
   Eventos em window: 'ideia:dados' (conteúdo mudou), 'ideia:sync' (status mudou). */
(function () {
  var KEY = "ideia.lamia.2026.v1";
  var CFG_KEY = "ideia.lamia.2026.config";
  var MAX_IMG_BYTES = 700 * 1024;

  function uid() { return "id" + Math.random().toString(36).slice(2, 9); }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function now() { return new Date().toISOString(); }

  var DEFAULTS = {
    convidados: [
      { id: "c1", ordem: 1, formato: "Fala de abertura", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" },
      { id: "c2", ordem: 2, formato: "Mesa redonda", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" },
      { id: "c3", ordem: 3, formato: "Mesa redonda", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" },
      { id: "c4", ordem: 4, formato: "Mesa redonda", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" },
      { id: "c5", ordem: 5, formato: "Mesa redonda", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" },
      { id: "c6", ordem: 6, formato: "Do problema ao projeto", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" },
      { id: "c7", ordem: 7, formato: "Do problema ao projeto", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" },
      { id: "c8", ordem: 8, formato: "Café conexão", nome: "Nome a confirmar", cargo: "Cargo · instituição", foto: "" }
    ],
    programacao: [
      { id: "p1", ordem: 1, horario: "13:00 às 13:30", titulo: "Credenciamento e boas-vindas", legenda: "", nome: "" },
      { id: "p2", ordem: 2, horario: "13:30 às 14:30", titulo: "Um motor de IA para o mundo", legenda: "", nome: "Thiago" },
      { id: "p3", ordem: 3, horario: "14:30 às 15:30", titulo: "Quando a IA entrou na operação", legenda: "", nome: "Geisy · Daisee · Cristofer · Jadson" },
      { id: "p4", ordem: 4, horario: "15:30 às 16:15", titulo: "Do problema ao projeto", legenda: "", nome: "Aquiles · Secretaria · DIREC" },
      { id: "p5", ordem: 5, horario: "16:15 às 17:00", titulo: "Café Conexão", legenda: "", nome: "Networking" }
    ],
    apoiadores: [
      { id: "a1", ordem: 1, categoria: "Realização", nome: "LAMIA", logo: "/evento/assets/lamia-logo.png", link: "https://lamia.sh.utfpr.edu.br" },
      { id: "a2", ordem: 2, categoria: "Realização", nome: "UTFPR", logo: "/evento/assets/utfpr.png", link: "https://www.utfpr.edu.br/campus/santahelena" },
      { id: "a3", ordem: 3, categoria: "Parceria", nome: "ACISA Santa Helena", logo: "/evento/assets/acisa.webp", link: "" }
    ],
    vagasParceria: 4,
    acesso: { usuario: "", senha: "" },
    revisao: 0
  };

  /* ---------- configuração do backend ---------- */

  var CFG_PADRAO = { tipo: "rest", endpoint: "", chave: "", cabecalho: "Authorization", prefixoChave: "Bearer ", modo: "local" };

  function config() {
    var c = clone(CFG_PADRAO);
    if (window.IDEIA_CONFIG) Object.assign(c, window.IDEIA_CONFIG);
    try {
      var raw = localStorage.getItem(CFG_KEY);
      if (raw) Object.assign(c, JSON.parse(raw) || {});
    } catch (e) {}
    c.endpoint = (c.endpoint || "").trim();
    c.modo = c.endpoint ? "remoto" : "local";
    return c;
  }

  function setConfig(patch) {
    var c = Object.assign(config(), patch || {});
    try { localStorage.setItem(CFG_KEY, JSON.stringify({ tipo: c.tipo, endpoint: c.endpoint, chave: c.chave, cabecalho: c.cabecalho, prefixoChave: c.prefixoChave })); } catch (e) {}
    estado.ultimoErro = "";
    anuncia();
    return config();
  }

  /* ---------- estado de sincronização ---------- */

  var estado = { pendente: false, enviando: false, ultimoErro: "", ultimaSync: "" };

  function anuncia() {
    window.dispatchEvent(new CustomEvent("ideia:sync", { detail: status() }));
  }

  function status() {
    var c = config();
    return {
      modo: c.modo,
      endpoint: c.endpoint,
      online: navigator.onLine !== false,
      pendente: estado.pendente || estado.enviando,
      enviando: estado.enviando,
      ultimoErro: estado.ultimoErro,
      ultimaSync: estado.ultimaSync
    };
  }

  /* ---------- normalização ---------- */

  function normaliza(d) {
    var base = clone(DEFAULTS);
    d = d || {};
    var conv = Array.isArray(d.convidados) ? d.convidados : base.convidados;
    var prog = Array.isArray(d.programacao) ? d.programacao : base.programacao;
    var apo = Array.isArray(d.apoiadores) ? d.apoiadores : base.apoiadores;
    return {
      convidados: conv.map(function (c, i) {
        return {
          id: c.id || uid(), ordem: i + 1,
          formato: c.formato || "", nome: c.nome || "", cargo: c.cargo || "", foto: c.foto || ""
        };
      }),
      programacao: prog.map(function (p, i) {
        return {
          id: p.id || uid(), ordem: i + 1,
          horario: p.horario || "", titulo: p.titulo || "", legenda: p.legenda || "", nome: p.nome || ""
        };
      }),
      apoiadores: apo.map(function (a, i) {
        return {
          id: a.id || uid(), ordem: i + 1,
          categoria: a.categoria === "Parceria" ? "Parceria" : "Realização",
          nome: a.nome || "", logo: a.logo || "", link: a.link || ""
        };
      }),
      vagasParceria: typeof d.vagasParceria === "number" ? Math.max(0, Math.min(12, d.vagasParceria)) : base.vagasParceria,
      acesso: {
        usuario: (d.acesso && d.acesso.usuario) || base.acesso.usuario,
        senha: (d.acesso && d.acesso.senha) || base.acesso.senha
      },
      revisao: typeof d.revisao === "number" ? d.revisao : 0
    };
  }

  /* ---------- leitura e gravação local ---------- */

  var cache = null;

  function load() {
    if (cache) return clone(cache);
    var d = null;
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) d = JSON.parse(raw);
    } catch (e) {}
    cache = normaliza(d);
    return clone(cache);
  }

  function gravaLocal(d) {
    cache = normaliza(d);
    try {
      localStorage.setItem(KEY, JSON.stringify(cache));
      return { ok: true };
    } catch (e) {
      var msg = e && e.name === "QuotaExceededError"
        ? "Espaço do navegador esgotado. Configure o banco de dados para guardar as imagens fora do navegador."
        : String(e && e.message || e);
      return { ok: false, error: msg };
    }
  }

  /* save() é sincrono para a interface responder na hora; o envio ao backend
     acontece em segundo plano e o status aparece via evento 'ideia:sync'. */
  function save(d) {
    var next = normaliza(d);
    next.revisao = (cache && cache.revisao || 0) + 1;
    var r = gravaLocal(next);
    window.dispatchEvent(new CustomEvent("ideia:dados", { detail: clone(cache) }));
    if (r.ok && config().endpoint) { estado.pendente = true; anuncia(); agendaPush(); }
    else if (r.ok) anuncia();
    return r;
  }

  /* ---------- backend ---------- */

  /* Duas formas de falar com o backend, escolhidas na aba "Banco de dados":
       tipo "rest"        -> GET/PUT {endpoint}/conteudo e POST {endpoint}/imagens
       tipo "apps-script" -> um único POST com { acao } no corpo (Apps Script /exec)
     O contrato completo dos dois está em SPEC.txt. */

  function rotas(c) {
    var base = c.endpoint.replace(/\/+$/, "");
    return { conteudo: base + "/conteudo", imagens: base + "/imagens", ping: base + "/ping" };
  }

  function autenticacao(c) {
    var h = {};
    if (c.chave && c.cabecalho) h[c.cabecalho] = (c.prefixoChave || "") + c.chave;
    return h;
  }

  function leJson(res) {
    if (!res.ok) throw new Error("HTTP " + res.status + " " + (res.statusText || ""));
    return res.json().catch(function () { throw new Error("O backend não devolveu JSON."); });
  }

  function chamada(acao, corpo) {
    var c = config();
    if (!c.endpoint) return Promise.reject(new Error("Nenhum banco de dados configurado."));

    if (c.tipo === "apps-script") {
      /* text/plain evita o preflight CORS que o Apps Script não responde */
      return fetch(c.endpoint, {
        method: "POST",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(Object.assign({ acao: acao, chave: c.chave }, corpo || {}))
      }).then(leJson).then(function (json) {
        if (!json || json.ok !== true) throw new Error((json && json.error) || "Resposta inesperada do backend.");
        return json;
      });
    }

    var r = rotas(c);
    var json = { "Content-Type": "application/json" };
    if (acao === "ping") {
      return fetch(r.ping, { headers: autenticacao(c) }).then(leJson).then(function (j) { return { ok: true, info: j }; });
    }
    if (acao === "lerConteudo") {
      return fetch(r.conteudo, { headers: autenticacao(c) }).then(leJson).then(function (j) {
        return { ok: true, conteudo: j.conteudo || j };
      });
    }
    if (acao === "salvarConteudo") {
      return fetch(r.conteudo, {
        method: "PUT",
        headers: Object.assign(json, autenticacao(c)),
        body: JSON.stringify(corpo.conteudo)
      }).then(leJson).then(function () { return { ok: true }; });
    }
    if (acao === "subirImagem") {
      return fetch(r.imagens, {
        method: "POST",
        headers: Object.assign(json, autenticacao(c)),
        body: JSON.stringify({ nome: corpo.nome, dataUrl: corpo.dataUrl })
      }).then(leJson).then(function (j) {
        var url = j.url || (j.conteudo && j.conteudo.url);
        if (!url) throw new Error("O backend não devolveu a URL da imagem.");
        return { ok: true, url: url };
      });
    }
    return Promise.reject(new Error("Ação desconhecida: " + acao));
  }

  var timer = null;
  function agendaPush() {
    clearTimeout(timer);
    timer = setTimeout(push, 900);
  }

  function push() {
    if (estado.enviando || !config().endpoint || !cache) return Promise.resolve({ ok: false });
    estado.enviando = true; estado.pendente = false; anuncia();
    var enviado = clone(cache);
    var corpo = { conteudo: { convidados: enviado.convidados, programacao: enviado.programacao, apoiadores: enviado.apoiadores, vagasParceria: enviado.vagasParceria, revisao: enviado.revisao } };
    return chamada("salvarConteudo", corpo).then(function () {
      estado.enviando = false; estado.ultimoErro = ""; estado.ultimaSync = now(); anuncia();
      return { ok: true };
    }).catch(function (err) {
      estado.enviando = false; estado.pendente = true;
      estado.ultimoErro = String(err.message || err); anuncia();
      return { ok: false, error: estado.ultimoErro };
    });
  }

  function pull() {
    if (!config().endpoint) return Promise.resolve({ ok: false, error: "Nenhum banco de dados configurado." });
    return chamada("lerConteudo").then(function (json) {
      var remoto = normaliza(json.conteudo);
      /* o login nunca vem do backend: fica só neste navegador */
      remoto.acesso = load().acesso;
      gravaLocal(remoto);
      estado.ultimoErro = ""; estado.ultimaSync = now();
      window.dispatchEvent(new CustomEvent("ideia:dados", { detail: clone(cache) }));
      anuncia();
      return { ok: true, conteudo: clone(cache) };
    }).catch(function (err) {
      estado.ultimoErro = String(err.message || err); anuncia();
      return { ok: false, error: estado.ultimoErro };
    });
  }

  function testar() {
    return chamada("ping").then(function (json) {
      estado.ultimoErro = ""; anuncia();
      return { ok: true, info: json };
    }).catch(function (err) {
      estado.ultimoErro = String(err.message || err); anuncia();
      return { ok: false, error: estado.ultimoErro };
    });
  }

  /* ---------- imagens ---------- */

  function shrink(file, max, quality) {
    max = max || 640;
    return new Promise(function (resolve, reject) {
      if (!file || !/^image\//.test(file.type)) { reject(new Error("Arquivo não é imagem")); return; }
      var fr = new FileReader();
      fr.onerror = function () { reject(new Error("Falha ao ler o arquivo")); };
      fr.onload = function () {
        var img = new Image();
        img.onerror = function () { reject(new Error("Imagem inválida")); };
        img.onload = function () {
          var w = img.naturalWidth, h = img.naturalHeight;
          var k = Math.min(1, max / Math.max(w, h));
          var cw = Math.max(1, Math.round(w * k)), ch = Math.max(1, Math.round(h * k));
          var cv = document.createElement("canvas");
          cv.width = cw; cv.height = ch;
          var cx = cv.getContext("2d");
          cx.imageSmoothingQuality = "high";
          cx.drawImage(img, 0, 0, cw, ch);
          var transparente = /png|webp|svg/.test(file.type);
          resolve(cv.toDataURL(transparente ? "image/png" : "image/jpeg", quality || 0.86));
        };
        img.src = fr.result;
      };
      fr.readAsDataURL(file);
    });
  }

  /* Com backend: sobe o arquivo e devolve a URL pública (o banco guarda a URL).
     Sem backend: devolve a imagem embutida, que vive só neste navegador. */
  function uploadImagem(file, ctx) {
    ctx = ctx || {};
    var max = ctx.max || 700;
    return shrink(file, max).then(function (dataUrl) {
      if (!config().endpoint) {
        if (dataUrl.length > MAX_IMG_BYTES) throw new Error("Imagem muito grande para o modo local. Configure o banco de dados.");
        return { url: dataUrl, remoto: false };
      }
      return chamada("subirImagem", {
        nome: (ctx.prefixo || "img") + "-" + uid() + (/png/.test(dataUrl.slice(0, 20)) ? ".png" : ".jpg"),
        dataUrl: dataUrl
      }).then(function (json) {
        if (!json.url) throw new Error("O backend não devolveu a URL da imagem.");
        return { url: json.url, remoto: true };
      });
    });
  }

  window.addEventListener("online", function () { anuncia(); if (estado.pendente) agendaPush(); });
  window.addEventListener("offline", anuncia);

  /* ---------- conteúdo publicado sem backend ----------
     Sem banco configurado, a página tenta ler um arquivo conteudo.json
     publicado ao lado dela (mesma pasta do dados-ideia.js). É assim que o
     conteúdo editado no painel chega a TODOS os visitantes: exporte pelo
     painel, substitua o conteudo.json e publique. As fotos vão embutidas
     no próprio arquivo (base64), então não há nada além dele para subir. */

  /* Resolve o caminho de uma imagem para a URL final.
     Aceita: URL completa (http/https), data:, caminho absoluto ("/evento/assets/x")
     ou relativo ("/evento/assets/x.jpg"). Relativo é resolvido para a pasta onde este
     arquivo (dados-ideia.js) está publicado, então funciona em /evento ou na raiz. */
  function assetUrl(v) {
    v = (v || "").trim();
    if (!v) return "";
    if (/^(https?:|data:|\/)/i.test(v)) return v;
    try {
      var s = document.querySelector('script[src*="dados-ideia.js"]');
      if (s && s.src) return s.src.replace(/dados-ideia\.js.*$/, "") + v.replace(/^\.?\//, "");
    } catch (e) {}
    return v;
  }

  function arquivoConteudoUrl() {
    try {
      var s = document.querySelector('script[src*="dados-ideia.js"]');
      if (s && s.src) return s.src.replace(/dados-ideia\.js.*$/, "conteudo.json");
    } catch (e) {}
    return "conteudo.json";
  }

  function bootstrapLocal() {
    fetch(arquivoConteudoUrl(), { cache: "no-store" })
      .then(function (res) { if (!res.ok) throw new Error("sem arquivo"); return res.json(); })
      .then(function (j) {
        var publicado = normaliza(j && j.conteudo ? j.conteudo : j);
        var atual = load();
        /* só aplica se o arquivo for igual ou mais novo que o cache local,
           pra não sobrescrever uma edição ainda não publicada (mesma regra
           de 'revisao' do backend). */
        if (publicado.revisao >= (atual.revisao || 0)) {
          publicado.acesso = atual.acesso; /* login nunca vem do arquivo */
          gravaLocal(publicado);
          window.dispatchEvent(new CustomEvent("ideia:dados", { detail: clone(cache) }));
        }
      })
      .catch(function () { /* sem conteudo.json: mostra o cache/DEFAULTS, silencioso */ });
  }

  window.IdeiaData = {
    KEY: KEY, CFG_KEY: CFG_KEY, DEFAULTS: DEFAULTS,
    load: load, save: save, pull: pull, push: push, testar: testar,
    config: config, setConfig: setConfig, status: status,
    uid: uid, clone: clone, shrink: shrink, uploadImagem: uploadImagem,
    assetUrl: assetUrl, bootstrapLocal: bootstrapLocal
  };

  /* Ao abrir a página: com backend, busca a versão publicada no banco;
     sem backend, tenta o conteudo.json publicado ao lado da página. */
  if (config().endpoint) setTimeout(function () { pull(); }, 0);
  else setTimeout(bootstrapLocal, 0);
})();
