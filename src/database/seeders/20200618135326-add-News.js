module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'news',
      [
        {
          id: 1,
          title: 'Plataforma criada na UTFPR monitora avanço da Covid-19',
          content: 'Com o objetivo de monitorar os avanços do novo coronavírus (Covid-19) no Paraná, pesquisadores da UTFPR do Câmpus Santa Helena criaram uma plataforma de data science e inteligência artificial que apresenta um panorama completo da pandemia no estado. O Painel Paraná Covid-19 tem entre os seus diferenciais a disponibilização de dados inéditos e personalizados por localidade de análise.\nA plataforma foi desenvolvida a partir de técnicas das áreas de ciência dos dados e inteligência artificial e permite, por exemplo, visualizações que mostram o impacto e estimam a previsão dos dados para as próximas semanas. Segundo os pesquisadores, com as  informações do painel, é possível compreender melhor a situação do novo coronavírus no estado e tomar decisões assertivas no combate à doença.\n"Hoje, temos a plataforma de dados mais completa do estado e uma das melhores do país. As pessoas podem acessar e descobrir o impacto real da Covid-19 e quais as previsões para os próximos dias. Nós temos a ferramenta ideal para gerar tomadas de decisão assertivas no combate ao vírus e enviar aos órgãos competentes [as informações necessárias], não permitindo que essa tarefa complexa seja feita no escuro em relação aos dados", explica Thiago França Naves, coordenador do projeto.',
          cover: 'painelCapa.jpeg',
          date_publication: new Date(2020, 08, 15).toISOString(),
          font: 'UTFPR',
          source: 'http://portal.utfpr.edu.br/noticias/geral/covid-19/plataforma-criada-na-utfpr-monitora-avanco-da-covid-19',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: 'Mercado do IA também foi afetado pelo efeito econômico da pandemia',
          content: 'A tecnologia de aprendizagem de máquina não havia conhecido a queda até os fins de 2019.\nFoi o engenheiro de software da Google François Chollet chamou atenção após de uma série de postagem no twitter:“Para muitas empresas pequenas, o investimento em IA se mostrou não essencial e foi cortado por conta da pandemia. Há menos pessoas em IA agora do que há seis meses, pela primeira vez desde 2010. Isso se torna evidente nos anúncios de vagas, que caíram. Acho que esse é um indicador de recessão econômica, e não o início de um inverno para a IA. Por enquanto, é apenas um efeito de curto prazo do choque causado pela pandemia causada pelo novo coronavírus. Além disso, a queda no uso total do aprendizado profundo é muito pequena”.\nPortanto, mercado ainda existe, entretanto, as empresas paralisaram o financiamento para desenvolvimento de IA como forma de cortar custo. Um suspiro no mercado dos EUA, foi o anuncio de U$ 1 bi. em financiamento para pesquisa em inteligência quântica e artificial.',
          cover: 'capaNoticia2.jpg',
          date_publication: new Date(2020, 08, 01).toISOString(),
          font: 'TECMUNDO',
          source: 'https://www.tecmundo.com.br/mercado/177183-efeito-economico-pandemia-atinge-mercado-ia.htm',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: 'Por que crianças precisam de proteção contra a influência da Inteligência Artificial',
          content: 'Algoritmos que interagem com aplicações como Alexa e que podem gravar os dados de voz como influenciar o desenvolvimento social e até mesmo a educação, podendo determinar se receberão assistência média e até mesmo se seus pais são capazes ou não de fornecer os devidos cuidados. “Por estarem se desenvolvendo intelectual, emocional e fisicamente, elas são muito moldáveis”, menciona Steve Vosloo, um especialista em políticas de conectividade digital da Unicef.\nEm janeiro foi divulgada uma avaliação contendo oito temas comuns dos 36 documentos mais relevantes, e que orientam as estratégias de IA nacional e corporativa – entre eles a privacidade, segurança, justiça e compreensibilidade.\nAssim como a Unicef, a Academia de Inteligência Artificial de Pequim (BAAI), organização apoiada pelo Ministério da Ciência e Tecnologia da China e pelo governo municipal de Pequim, também publicou um conjunto de princípios de IA para as crianças. Tais diretrizes se alinham com as da Unicef, relacionando temas como privacidade, justiça, compreensibilidade e bem-estar infantil.',
          cover: 'capaNoticia3.jpg',
          date_publication: new Date(2020, 10, 05).toISOString(),
          font: 'MIT Technology Review',
          source: 'https://mittechreview.com.br/por-que-criancas-precisam-de-protecao-especial-contra-a-influencia-da-inteligencia-artificial-ia/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          title: 'Hospital do Câncer utilizará inteligência artificial em diagnósticos',
          content: 'O Hospital do Cancêr de Pernambuco (HCP) passou a utilizar uma plataforma de Inteligência Artificial (IA) para diagnóstico de exames radiológicos. De acordo com o hospital, a tecnologia aumenta 20% a taxa de diagnóstico precoce do câncer, detectando alterações que passariam despercebidas, aumentando as chances de cura em até 95%.\nO sistema funciona através de uma IA que capta imagens de radiografias e instantaneamente desenvolve uma resposta de câncer por meio de "mapa de calor", cores e percentuais para avaliação médica. A avaliação é feita através do cruzamento de imagens com banco de dados mundial.\n"A técnica veio para agregar na precisão dos diagnósticos. Com a Inteligência Artificial nós teremos um olhar mais atencioso aos exames. A ideia já vem sendo testada desde junho como exame de raio-x do tórax e, agora, estamos levando para outras áreas como tomografias também", explica Fábio Malta, superintendente técnico do Hospital de Câncer.',
          cover: 'capaNoticia4.jpg',
          date_publication: new Date(2020, 08, 11).toISOString(),
          font: 'Diário de Pernambuco',
          source: 'https://www.diariodepernambuco.com.br/noticia/vidaurbana/2020/09/hospital-do-cancer-utilizara-inteligencia-artificial-para-identificaca.html',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          title: 'Como a inteligência artificial faz você comprar coisas, mesmo sem precisar',
          content: 'Varejistas do mundo todo estão usando IA (inteligência artificial) — sistemas de software que podem aprender por si mesmos — para tentar prever e encorajar automaticamente nossas preferências e compras como nunca antes.\nO consultor de varejo Daniel Burke, da Blick Rothenberg, chama isso de "o cálice sagrado (...) para se construir um perfil de clientes e sugerir um produto antes que eles percebam que é o que queriam".\nReceber ofertas de produtos que você realmente deseja comprar em vez de cupons aleatórios é ótimo para os consumidores. No entanto, Jeni Tennison, que dirige o Instituto de Dados Abertos do Reino Unido, um órgão que faz campanha contra o uso indevido de dados, permanece cautelosa sobre a vasta quantidade de informações sobre as pessoas que estão sendo coletadas.\n"As pessoas ficam felizes com os produtos recomendados, mas começam a se sentir mais desconfortáveis quando são "cutucadas" ou manipuladas em compras específicas baseadas na caricatura de quem são, e não na complexidade total de sua personalidade", diz ela.\nCom o uso de algoritmos e dados, mecanismos de recomendação filtram e recomendam os produtos mais relevantes a um usuário específico. Como costumam dizer, é um assistente de loja automatizado. Quando pedem alguma coisa, também sugerem outra que o vistante pode estar interessado.\nA fim de tornar-se competitivo no mercado e obter clientes de forma mais eficiente, o uso de mecanismos de recomendação é de maior interesse. Especialmente combinado com inteligência artificial, recomendações feitas no momento têm maior aplicação, o que é pragmático e eficiente quanto ao tempo gasto. Graças a inteligência artificial, os mecanismos de recomendação melhoraram sua produtividade e baseiam-se na preferência visual do cliente, ao invés da descrição dos itens.',
          cover: 'capaNoticia5.jpg',
          date_publication: new Date(2020, 10, 10).toISOString(),
          font: 'Época Negócios.',
          source: 'https://epocanegocios.globo.com/Tecnologia/noticia/2020/11/como-inteligencia-artificial-faz-voce-comprar-coisas-mesmo-sem-precisar.html',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
