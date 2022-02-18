const oldWorks = [
  {
    oldKey: 2,
    title:
      'Auditoria Automatizada da Qualidade do Couro Bovino Utilizando Visão Computacional e Deep Learning',
    objective:
      'O projeto consiste em desenvolver um arcabouço técnológico para captura de imagens de couro bovino processado na forma couro wet blue e classificação da quantidade de defeitos existentes na peça analisada. Existem mais de 18 tipos de anomalias e seis níveis de qualidade atribuído ao couro bovino.',
    github: null,
    startDate: '2019-10-01T03:00:00.000Z',
    endDate: '2021-10-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'IC01/2019',
  },
  {
    oldKey: 4,
    title:
      'E-Battle: Aprendizagem Dinâmica e Customizável em Sala de Aula Utilizando Competição pelo Conhecimento',
    objective:
      'O projeto consiste em desenvolver um jogo digital com base em uma dinâmica de tabuleiro para uso em sala de aula para testar conhecimentos dos alunos de forma individual ou em grupo. O projeto possui os diferenciais de utilizar recursos de efeitos visuais da engine Unity e não utilizar conteúdos de aprendizado estáticos, sendo possível o professor customizar os conteúdos de conhecimento que são utilizados no jogo.',
    github: 'https://github.com/lamiautfpr/ICT01-2019---E-Battle',
    startDate: '2019-04-01T03:00:00.000Z',
    endDate: '2021-10-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'ICT01/2019',
  },
  {
    oldKey: 5,
    title:
      'Classificação De Espécies De Plantas Utilizando Caracteristicas De Textura',
    objective:
      'O trabalho consiste em utilizar caracteristicas de textura para identificar espécies de plantas',
    github: null,
    startDate: '2019-08-01T03:00:00.000Z',
    endDate: '2021-10-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'C03/2019',
  },
  {
    oldKey: 7,
    title:
      'Pint Of Science Oeste - Ciência Atual E Descomplicada Dentro Dos Bares Para A População',
    objective:
      'O Brasil passa por um momento onde existe um grande distanciamento da população para com a ciência, no que diz respeito a confiança no uso dos fundamentos científicos para formação de opinião ou validação de informações recebidas. Esse problema é agravado pelo surgimento constante das notícias falsas ou \\textit{fake news} e do relativismo a acontecimentos que afetam a sociedade, ambos agravados pela quantidade de informações em mídias sociais e sites na internet. O distanciamento com a ciência, bem como a quantidade de \\textit{fake news} e do relativismo presente nas pessoas deve ser combatido. O Pint of Science Oeste é um projeto que objetiva levar conhecimento científico acessível e inteligível a população, através de eventos onde palestras e debates são ministrados por cientistas em locais comerciais como bares e restaurantes com promoções de bebidas para incentivar o público e promover um clima participativo. Junto com os eventos, o projeto visa o estabelecimento de uma comunidade de atores ligados a ciência e inovação no oeste do Paraná, para que essa permita a realização de eventos simultâneos nas cidades da região. A comunidade Pint of Science Oeste irá conectar os atores incentivando reuniões e debates periódicos para geração de iniciativas, políticas e materiais ligados a ciência e inovação, com o propósito de entrega aos setores públicos e privados para incentivo a adoção destas ações. Assim, a comunidade Pint of Science Oeste buscará posicionar-se como uma liderança regional para incentivo ao uso da ciência e inovação nos setores da sociedade.',
    github: null,
    startDate: '2021-04-01T03:00:00.000Z',
    endDate: '2021-12-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'EXT02/2020',
  },
  {
    oldKey: 8,
    title:
      'Explorando a Visualização de Dados para Análise e Predição de Eventos na Indústria',
    objective:
      'As empresas e organizações do setor privado buscam dentro de suas cadeias de produção o melhoramento contínuo de seus indicadores de desempenho, produtividade, gastos e capacidade de gerar inovação. Novas metodologias ou mesmo tomadas de decisão dentro de um processo produtivo que trazem melhorias podem muitas vezes surgir a partir da observação dos dados gerados internamente por este, junto com uma análise analítica que visa entender e gerar conhecimento a partir de seus dados. O projeto proposto objetiva a construção de uma técnica de visualização de dados para auxiliar a tomada de decisão no contexto da indústria.',
    github:
      'https://github.com/lamiautfpr/IC01-2020-Visualizacao-de-Dados-para-Analise-e-Predicao-de-Eventos-na-Industria',
    startDate: '2019-08-03T03:00:00.000Z',
    endDate: '2021-10-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'IC01/2020',
  },
  {
    oldKey: 9,
    title: 'Reconhecimento de Espécies Florestais Usando Base Zeiss',
    objective:
      'Construção de um modelo utilizando deep learning para reconhecimento de espécies de madeira florestais em cooperação com a perícia da polícia florestal de Manaus',
    github: 'https://github.com/lamiautfpr/ICT01-2019---E-Battle',
    startDate: '2020-08-01T03:00:00.000Z',
    endDate: '2021-04-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'CLB01-2020',
  },
  {
    oldKey: 10,
    title: 'Portal de Dados Geográficos Geoeste',
    objective:
      'Construção de um portal (site) para exibição de dados geográficos/agro da região oeste utilizado tecnologias de plotagens de mapas',
    github: null,
    startDate: '2019-04-01T03:00:00.000Z',
    endDate: '2021-10-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'CLB02-2020',
  },
  {
    oldKey: 11,
    title:
      'Análise de Imagens de Vitiligo através de Técnicas de Segmentação e Classificação',
    objective:
      'O objetivo deste trabalho consiste em analisar diferentes técnicas de segmentação e classificação utilizadas em imagens de vitiligo',
    github: null,
    startDate: '2020-08-01T03:00:00.000Z',
    endDate: '2021-08-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'TCC01/2020',
  },
  {
    oldKey: 12,
    title:
      'Combinação Auto-ajustada de Modelos de Aprendizagem de Máquina com Otimização de Hiperparâmetros para Detecção de Intrusão em Redes de Computadores',
    objective:
      'Proposto no escopo deste trabalho, o EMHOSIR é um método de combinação de classi-ficadores que se baseia no método de combinação de classificadores de Souza (2018) e prevê aimplementação de fases específicas voltadas à otimização de hiperparâmetros e ao auto-ajuste de faixa intermediária. Com a aplicação direcionada à detecção de intrusão em redes de com-putadores, o EMHOSIR precisa ser entendido nas duas apresentações por meio das quais se fazpresente ao longo deste texto: uma como método genérico de aprendizagem de máquina e outracomo instância/implementação do referido método',
    github: null,
    startDate: '2018-10-01T03:00:00.000Z',
    endDate: '2020-12-21T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 13,
    title: 'BioQuiz',
    objective:
      'Aplicativo para estudo e prática de questões da área de ciências biológicas',
    github: null,
    startDate: '2019-03-06T03:00:00.000Z',
    endDate: '2017-08-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 14,
    title: 'Guia Virtual do Estudante',
    objective:
      'Aplicativo para auxiliar estudantes da UTFPR e futuros alunos a se informarem dos cursos disponíveis por campus e suas principais informações',
    github: null,
    startDate: '2018-02-14T02:00:00.000Z',
    endDate: '2017-03-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 15,
    title: 'SECOD',
    objective:
      'Sistema de levantamento de coordenadas de motores utilizados em máquinas agrícolas e suas informações de uso',
    github: null,
    startDate: '2018-08-08T03:00:00.000Z',
    endDate: '2017-01-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 16,
    title:
      'Use Of Online POMDP with Heuristic Search Applied to Decision Making in Real Time Strategy Games',
    objective:
      'A tomada de decisão em jogos de estratégia em tempo real (RTS) é um processo complexo tarefa devido ao número de ações disponíveis e ao ambiente com informações parciais. O processo de decisão de Markov parcialmente observável (POMDP) ​​é uma abordagem que fornece bom desempenho e valores de recompensa em ambientes com as limitações discutidas. No entanto, seu uso em jogos RTS é limitado devido a restrições em tempo real e dificuldade em abstrair um conjunto completo de ações em uma única tomada de decisão',
    github: null,
    startDate: '2017-08-01T03:00:00.000Z',
    endDate: '2017-08-01T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 17,
    title:
      'Developing Strategies for Improving Planning and Scheduling of Actions in RTS Games',
    objective:
      'Este artigo descreve técnicas desenvolvidas para gerar e programar ações usando pedido parcial e SLA* na produção de recursos para jogos de estratégia em tempo real (RTS). Os jogos RTS são caracterizados por duas etapas importantes. Na primeira etapa, um plano de ação deve ser executado para a produção de recursos. Na segunda etapa, os recursos produzidos na etapa anterior são empregados em batalhas contra o inimigo. A produção de recursos é vital para o sucesso neste tipo de jogo. Os algoritmos desenvolvidos diminuem o make span, que é o tempo necessário para a execução das ações para atingir a meta de produção de recursos.\\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/221417508_Developing_Strategies_for_Improving_Planning_and_Scheduling_of_Actions_in_RTS_Games)',
    github: null,
    startDate: '2011-11-07T02:00:00.000Z',
    endDate: '2011-11-07T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 25,
    title:
      'Online POMDP with Heuristic Search and Sampling Applied to Real Time Strategy Games',
    objective:
      'Jogos RTS são um domínio no qual o planejamento e a tomada de decisões são integrados. RTS Games é um acrônimo para real-time strategy, que é uma categoria de jogos onde o jogador deve manipular diversos recursos e unidades, por meio de economias em desenvolvimento, focando em derrotar um ou mais inimigos. Recursos brutos, como minerais, permitem a criação de outros recursos, como quartéis, que são usados para criar unidades móveis e aerotransportadas.\\r\\n\\r\\nPOMDP é um framework cujo modelo pode ser representado pela tupla hS, A, O, T, Z, Ri, com cada um desses elementos como segue: S é o conjunto de todos os estados possíveis do ambiente; A é o conjunto de todas as ações possíveis que o agente pode performar o ambiente; O é o conjunto de observações que podem ser recebidas diretamente do ambiente; T é uma função de transição de estado T:S×A×S→[0,1], onde T(s, a, s0) =P r(s‘|s, a) Z é uma função de observação S×A×Z→[0,1], onde Z(s, a, o) = P r(o|a, s) R é a função de recompensa imediata S×A→R, dado que o agente realizou a ação a no estado s.\\r\\n\\r\\n\\r\\nNo POMDP online, quando o agente está em um estado e recebe uma observação *o*, ele realiza a atualização do estado de crença e calcula uma política ótima que maximiza a recompensa total pela execução de cada ação *a*. O agente é incerto quanto ao estado em que é devido à incerteza do ambiente, então estados de crença são geralmente representados por uma função de distribuição de probabilidade, seguindo a definição: b=b(s)|s∈S, 0≤b(s)≤1,Ps∈Sb(s)=1. A recompensa total é induzida pela função V (b, π), a partir do estado de crença *b*, e da política atual *π*, sendo calculada de acordo com a equação 1.\\r\\n\\r\\nCom o desconto γ = [0, 1]. Ao contrário do POMDP com implementação tradicional, a versão online intercala o planejamento e execução. Sempre que uma política é executada e o agente recebe uma nova observação, é feita uma atualização do estado de crença. Este processo forma um loop entre a atualização dos estados (planejamento) e a ação escolhida (execução).\\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/325637585_Online_POMDP_with_Heuristic_Search_and_Sampling_Applied_to_Real_Time_Strategy_Games)\\r\\n\\r\\n',
    github: null,
    startDate: '2017-11-01T02:00:00.000Z',
    endDate: '2017-11-01T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 18,
    title:
      'Resource Production in StarCraft Based on Local Search and Planning',
    objective:
      'Este artigo descreve uma abordagem para a produção de recursos em jogos de estratégia em tempo real (RTS Games). Os jogos RTS são uma área de investigação que apresenta desafios interessantes para o planeamento de ações concorrentes, satisfação de pré-condições e gestão de recursos. Em vez de trabalhar com metas fixas para a produção de recursos, nós pretendemos atingir metas que maximizem a produção de recursos em tempo real. A abordagem usa o algoritmo Simulated Annealing (SA) como uma ferramenta de busca para derivar objetivos de produção de recursos. Os autores também desenvolveram um sistema de planejamento que funciona em conjunto com o SA para operar adequadamente em um ambiente de tempo real. A análise do desempenho em comparação com jogadores humanos e bot corrobora para confirmar a eficiência de nossa abordagem e as afirmações que fizemos. \\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/318229496_Resource_Production_in_StarCraft_Based_on_Local_Search_and_Planning)',
    github: null,
    startDate: '2017-07-01T03:00:00.000Z',
    endDate: '2016-07-01T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 21,
    title: 'Skin melanoma segmentation by morphological approach',
    objective:
      'O câncer de pele é uma doença cuja principal característica é o crescimento celular autônomo e descontrolado. Do ponto de vista médico e dermatológico, costuma-se usar quatro características conhecidas como regras "ABCD" para identificar e reconhecer se um melanoma é benigno ou maligno: Assimetria, Borda irregular, Cor e Diâmetro variados (maior que 6 mm). A Figura 1-a mostra um nevo estranho típico. A transformação maligna é uma lesão grande com alterações de cor, diâmetro aumentado ou bordas irregulares, conforme mostrado na Figura 1-b. Os cânceres de pele não melanoma são os cânceres de pele mais comuns.  \\r\\n\\r\\nFigura 1: Exemplos de lesões cutâneas: (a) Nevo benigno - (b) Maligno  \\r\\n\\r\\nO melanoma maligno é um tumor menos comum de etiologia desconhecida, sendo o mais grave devido à sua capacidade de invadir outras partes do corpo, mesmo que a lesão ainda seja pequena. Portanto, se detectado em estágios iniciais, os resultados do tratamento aumentam.\\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/254462568_Skin_melanoma_segmentation_by_morphological_approach)',
    github: null,
    startDate: '2012-08-01T03:00:00.000Z',
    endDate: '2012-08-01T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 1,
    title:
      'Principais Configurações na Integração de Visão Computacional e Deep Learning: Algoritmos e Técnicas',
    objective:
      'O objetivo deste trabalho é sintetizar, revisar e apresentar os principais conceitos e aplicações que envolvem o uso de diferente modelos de Aprendizagem Profunda aplicados a tarefas de Visão Computacional, bem como desenvolver conceitos próprios sobre a integração destas duas áreas e as melhores formas de utilizá-las visando obter resultados eficientes em tarefas correlatas.',
    github: null,
    startDate: '2019-08-01T03:00:00.000Z',
    endDate: '2021-08-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.405Z',
    updateAt: '2020-12-02T17:52:57.405Z',
    visible: true,
    internalCode: 'TCC01/2019',
  },
  {
    oldKey: 3,
    title:
      'Plataforma de Monitoramento Inteligente da Covid-19 no estado do Paraná',
    objective:
      'O objetivo do projeto é o desenvolvimento de uma Plataforma de Análise Inteligente de Dados acerca da pandemia da Covid-19 no estado do Paraná, para um monitoramento eficiente das macrorregiões e municípios aberto a população e auxílio a predição e tomada de decisão pelos órgãos públicos de todo o estado. A plataforma utilizando inteligência artificial visa encontrar padrões comportamentais em mais de quarenta variáveis da pandemia como as quantidades de infectados, óbitos e ocupação de leitos, junto com as predições futuras destas, gerando relatórios técnicos que conduzem os agentes a tomadas de decisão mais assertivas e preventivas no combate e contenção da Covid-19. A Plataforma pode ser acessada pelo link https://bit.ly/covid19PR.',
    github: 'https://github.com/lamiautfpr/IC02-2019-Painel-de-Dados-Covid19',
    startDate: '2019-10-01T03:00:00.000Z',
    endDate: '2021-10-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'IC02/2019',
  },
  {
    oldKey: 6,
    title:
      'Pyladies Oeste - Mulheres Protagonistas da Tecnologia da Informação e Engenharias',
    objective:
      'O mercado de tecnologia da informação (TI) é um dos que mais possuem falta de profissionais qualificados no Brasil hoje, sendo que o Paraná apresenta um deficit próximo dos 1500 profissionais. Além do deficit, as áreas de TI e engenharias apresentam uma grande diferença na quantidade de mulheres que seguem carreiras quando comparado a quantidade de homens, isso deve-se a fatores e como segregação vertical e falta de incentivo nas etapas de formação escolar. Essa diferença entre gêneros, os fatores que levam a isso e baixa quantidade de mulheres nas carreiras do mercado de tecnologia devem ser combatidas. Assim, o Pyladies Oeste é um projeto com objetivo de sensibilizar, qualificar e incentivar mulheres a adentrarem na área e no mercado de TI e engenharias, através da criação de uma comunidade onde estas possam receber aulas com conteúdos técnicos didáticos e realizem encontros periódicos para trocas de experiências pessoais e do conhecimento adquirido em um apoio conjunto. Com essa iniciativa o projeto visa diminuir a disparidade entre homens e mulheres nos curso superiores e no mercado de trabalho de TI, fornecer mão de obra qualificada em tecnologia para o estado do Paraná minimizando a falta atual de profissionais na área e combater a segregação vertical em mulheres principalmente no ensino médio onde exite a maior ocorrência desta. A comunidade Pyladies Oeste visará posicionar-se como uma liderança regional nas temáticas de igualdade de gênero e inclusão feminina nas áreas de TI e engenharias frente aos setores públicos e privados.',
    github: null,
    startDate: '2021-03-01T03:00:00.000Z',
    endDate: '2021-12-02T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.406Z',
    updateAt: '2020-12-02T17:52:57.406Z',
    visible: true,
    internalCode: 'EXT01/2020',
  },
  {
    oldKey: 24,
    title:
      'Maximization of the resource production in RTS games through stochastic search and planning',
    objective:
      'Os jogos RTS são um importante campo de pesquisa no Planejamento de Inteligência Artificial. Esses jogos apresentam muitos desafios para o planejamento. Os jogos RTS são caracterizados por duas fases importantes. O primeiro tem a ver com reunir recursos e desenvolver um exército. Na segunda fase, os recursos produzidos são usados em batalhas contra os inimigos. Assim, a primeira fase é vital para o sucesso no jogo e o poder do exército desenvolvido reflete diretamente nas chances de vitória. Este trabalho foca na escolha dos objetivos a serem alcançados durante o jogo. Para fazer isso, desenvolvemos uma abordagem para a maximização dos recursos de produção com base em busca e planejamento estocástico. Os resultados mostram a eficácia de nossa abordagem em encontrar metas que aumentem a força do exército de jogadores.\\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/261078781_Maximization_of_the_resource_production_in_RTS_games_through_stochastic_search_and_planning)\\r\\n',
    github: null,
    startDate: '2012-10-01T03:00:00.000Z',
    endDate: '2012-10-01T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 19,
    title:
      'Combining Texture and Shape Descriptors for Bioimages Classification: A Case of Study in ImageCLEF Dataset',
    objective:
      'A primeira rodada de experimentos foi realizada com o objetivo de avaliar a contribuição de cada classe dos descritores adotados (forma e textura). A abordagem de recursos baseada em correlação foi aplicada ao vetor de recursos completo (consulte a Seção 3) antes dos métodos de classificação. Como resultado, os recursos foram selecionados a fim de construir um novo vetor de recursos, conforme mostrado na Tabela:\\r\\n\\r\\n\\r\\nTabela 1 . Composição do vetor de recurso considerando todos os recursos e os resultados da seleção de recursos.\\r\\n\\r\\n\\r\\nEsses resultados apontam que os recursos de textura são um pouco mais relevantes do que os descritores de forma com relação ao número de recursos selecionados. Contudo, a seleção de recursos indica que ambos eram importantes. Os recursos de textura tem 58% e os descritores de forma têm 42% dos recursos selecionados.\\r\\n\\r\\nA fim de avaliar o desempenho dos classificadores em relação ao melhor e as espécies pior classificadas, as cinco espécies com melhores e piores resultados foram selecionados nas Tabelas 3 e 4, respectivamente. A Figura 1 mostra um exemplo para cada das espécies listadas nas Tabelas 3 e 4.\\r\\n\\r\\n\\r\\nTabela 3. As cinco espécies mais bem classificadas\\r\\nTabela 4. As cinco espécies piores classificadas\\r\\nFig. 1. Amostras das espécies melhor e pior classificadas de acordo com as Tabelas 3 e 4.\\r\\n\\r\\n\\r\\nO artigo apresenta uma estrutura nova e flexível para o processamento de bioimagem, extração de recursos e classificação. O framework proposto combina características baseadas em textura e forma, melhorando em grande medida a precisão da classificação de imagens biológicas. Além disso, não só permite a fácil adição de novos métodos de processamento, descrição e classificação de imagens, mas também proporciona a avaliação de tais métodos nas mesmas condições. É importante destacar que a grande maioria dos trabalhos na literatura negligencia essa questão. Outro ponto abordado pela abordagem proposta está relacionado à alta dimensionalidade dos vetores de características. A fim de mitigar esse problema, incorporamos um método de seleção de características. Conforme mostrado na seção de experimentos, a abordagem proposta apresentou resultados notáveis ​​ao considerar a classificação das espécies de plantas, chegando a 87,5% de acurácia no caso geral. Considerando cada uma das espécies ele atingiu, em muitos casos, até 100% de acerto. Além disso, a dimensionalidade dos vetores de características foi reduzida em cerca de 4 vezes menos dimensões, diminuindo o custo computacional de classificação. Conseqüentemente, este teste fica a utilidade da abordagem proposta em aplicações biológicas reais.\\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/258341727_Combining_Texture_and_Shape_Descriptors_for_Bioimages_Classification_A_Case_of_Study_in_ImageCLEF_Dataset)',
    github: null,
    startDate: '2013-11-01T02:00:00.000Z',
    endDate: '2013-11-01T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 22,
    title:
      'A Computer Vision Approach for Automatic Measurement of the Inter-plant Spacing',
    objective:
      'Após exaustiva pesquisa em conjunto de dados de imagens de lavouras de milho, identificou-se que esse assunto ainda é pouco explorado pela comunidade científica. Assim, um conjunto de dados de imagens foi construído como uma contribuição adicional deste trabalho, que está disponível na url: http://github.com/brilhador/cornspacing.\\r\\n\\r\\nO conjunto de dados de imagens é composto por plantas de milho, as quais foram adquiridas através de dispositivo móvel considerando imagens panorâmicas. O processo de aquisição de imagens Uma abordagem de visão computacional para medição automática.\\r\\n\\r\\nFigura 1. O processo de aquisição de imagens.\\r\\n\\r\\nAs imagens foram adquiridas em duas situações distintas: preparo do solo após aplicação de herbicida (TH) e preparo convencional (CT). Nas imagens de CT o solo passa por um preparo mecânico de aração e gradagem. Por outro lado, nas imagens do TH não há preparo mecânico do solo, em que o solo fica coberto com resíduos de diversas culturas utilizadas em sucessão ou rotação. A eliminação de resíduos de colheita e ervas daninhas é realizada com a aplicação de herbicidas. Essas duas classes de imagens são apresentadas na Figura 2.(a) e (b) são imagens brutas do conjunto de dados proposto. (c) e (d) são imagens em tons de cinza após realizar COVE. (e) e (f) são imagens binárias após realizar o limiar.\\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/283504970_A_Computer_Vision_Approach_for_Automatic_Measurement_of_the_Inter-plant_Spacing)',
    github: null,
    startDate: '2015-11-01T02:00:00.000Z',
    endDate: '2015-11-01T02:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 26,
    title:
      'Classification and Pixel-Based Segmentation to Evaluate Soybean Seeds Submitted to Tetrazolium Test',
    objective:
      'A produção e o uso de sementes de alta qualidade são essenciais para a cultura da soja. Assim, o sistema de controle de qualidade na indústria de sementes deve ser confiável, preciso e rápido. O teste de tetrazólio avalia não só a viabilidade das sementes, mas também o seu vigor, além de fornecer informações sobre os agentes que causam a redução de sua qualidade. Embora este teste não use dispositivos e reagentes caros, ele requer um analista bem treinado. Sua precisão depende do conhecimento de todas as técnicas e procedimentos exigidos. Além disso, também é necessária a subjetividade do observador. Assim, este ensaio teve como objetivo desenvolver uma ferramenta computacional que pudesse minimizar a subjetividade implícita na realização deste teste. Contribui também para gerar maior credibilidade de informações e garantir respostas precisas. Algoritmos de classificação supervisionada foram aplicados com base na extração de imagens digitais e caracterização do teste de tetrazólio. Este procedimento teve como objetivo produzir uma segmentação baseada em pixels dessas imagens, para produzir uma imagem digital segmentada do teste de tetrazólio de acordo com as classes de dano. Essa ferramenta permite, com base em imagem de teste de tetrazólio, identificar danos em embriões de soja, bem como sua localização e extensão nos tecidos, de forma que a interpretação seja menos subjetiva. O método aplicado permitiu identificar danos nas imagens dos testes de tetrazólio de forma simples, bem como extrair informações mais seguras sobre esses danos e realizar o controle de manejo do teste de tetrazólio a partir de um arquivo de dados de sementes.',
    github: null,
    startDate: '2019-08-01T03:00:00.000Z',
    endDate: '2019-08-01T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 27,
    title:
      'Supervised Approach to Sky and Ground Classification Using Whiteness-Based Features',
    objective:
      'A detecção do solo do céu desempenha um papel importante em muitas aplicações, como veículo de controle não tripulado, processo de desagregação, detecção de nuvem, por exemplo. Este artigo propõe uma técnica supervisionada de classificação céu-solo para colorir imagens. A novidade da proposta é avaliar a eficiência dos índices de alvura na tarefa de classificação. A estratégia da proposta consiste em avaliar o poder dos índices de alvura na tarefa de classificação. Onze índices de brancura são usados ​​como recursos para alimentar um classificador SVM. Resultados experimentais em 1200 imagens e avaliações numéricas destacaram que a combinação de cinco índices de brancura é uma estratégia interessante para classificar o céu e o solo.',
    github: null,
    startDate: '2018-01-12T03:00:00.000Z',
    endDate: '2018-01-12T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 28,
    title:
      'One Approach to Determine Goals in RTS Games Using Maximization of Resource Production with Local Search and Scheduling',
    objective:
      'A produção de recursos em jogos RTS é uma área que apresenta muitos desafios, como satisfação de restrições, agendamento de ações e gerenciamento de recursos. Apesar desses desafios, devemos considerar quais recursos devem ser utilizados em uma produção, uma vez que os recursos produzidos caracterizam um objetivo que é alcançado dentro do jogo. Existem poucos estudos que consideram a escolha dos recursos mais adequados para compor uma meta. Portanto, desenvolvemos uma nova abordagem que pode determinar objetivos dentro de jogos RTS com base na maximização da produção de recursos. Os objetivos são determinados através de um critério de qualidade e as ações necessárias para sua execução também são determinadas. A abordagem utiliza o algoritmo Simulated Annealing (SA) juntamente com técnicas que permitem sua execução no ambiente de tempo real. Neste artigo, a ênfase será dada na descrição dessas técnicas. Os experimentos mostram que a abordagem consegue bons resultados operando em tempo real dentro do jogo, bem como competindo com jogadores humanos experientes e outros jogadores de IA tanto em relação à produção de recursos.',
    github: null,
    startDate: '2015-11-12T03:00:00.000Z',
    endDate: '2015-11-12T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 29,
    title: 'Using search and learning for production of resources in RTS games',
    objective:
      'Os chamados jogos de estratégia em tempo real são caracterizados por duas etapas importantes. Na primeira etapa, um plano de ação deve ser executado para a produção de recursos. Na segunda etapa, os recursos produzidos na etapa anterior são empregados em batalhas contra o inimigo. A produção de recursos é vital para o sucesso neste tipo de jogo. Este artigo descreve um algoritmo para planejamento e programação de ações que proporcionam a coleta de recursos. A ênfase neste artigo é dada à estratégia de escalonamento, que é baseada no SLA *. Para aumentar a eficiência do escalonamento, algumas estratégias foram desenvolvidas para melhorar o SLA *. Os experimentos mostram melhores resultados em comparação com outras abordagens existentes.',
    github: null,
    startDate: '2012-04-12T03:00:00.000Z',
    endDate: '2012-04-12T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 30,
    title: 'Color approach of melanoma lesion segmentation',
    objective:
      'Este artigo apresenta uma abordagem de segmentação do melanoma pela morfologia da cor. As imagens do melanoma são filtradas por ferramentas morfológicas usando uma ordem lexicográfica no espaço de cores HSI. Uma técnica de limiar é aplicada para segmentar a região de interesse do melanoma (ROI). Técnicas morfológicas binárias são usadas para filtrar a ROI. A abordagem foi testada em dois bancos de dados de imagens benignas e malignas, ambas contendo 100 imagens, e os resultados foram comparados à segmentação por verdade e Fuzzy CMeans. Ao realizar doze métricas, os resultados mostraram os aspectos promissores dessa abordagem para segmentar lesões benignas e malignas.',
    github: null,
    startDate: '2012-01-01T03:00:00.000Z',
    endDate: '2012-01-01T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
  {
    oldKey: 23,
    title:
      'Classification of Weeds and Crops at the Pixel-Level Using Convolutional Neural Networks and Data Augmentation',
    objective:
      'A classificação em nível de pixel de safras e ervas daninhas é um problema aberto na visão computacional. O uso de agroquímicos é necessário para o controle eficaz de ervas daninhas, mas um dos grandes desafios da agricultura de precisão é reduzir seu uso e, ao mesmo tempo, manter altos rendimentos das lavouras. Recentemente, técnicas automatizadas de controle de ervas daninhas baseadas em visão computacional foram desenvolvidas, apesar das dificuldades na criação de conjuntos de dados agrícolas. Uma solução possível para o pequeno volume de dados disponível é o aumento de dados. Este artigo investiga o impacto das transformações de aumento de dados individuais na classificação pixel de culturas e ervas daninhas ao usar um modelo de Deep Learning. Ele também investiga a influência da resolução da imagem de entrada no desempenho da classificação e propõe uma estratégia de aumento de patch. Os resultados mostraram que a aplicação de transformações individuais pode ser valiosa para o modelo, mas é superada pela combinação de todas as transformações. Este trabalho também descobriu que entradas de resolução mais alta podem aumentar o desempenho de classificação quando combinadas com técnicas de aumento, e que o aumento de patch pode ser um recurso valioso ao lidar com um pequeno número de imagens de alta resolução.  \\r\\nO método atinge a marca de 83,44% no Coeficiente de Similaridade Média de Dados, um aumento de 19,96% pontos percentuais em relação ao modelo não aumentado.\\r\\n\\r\\n[Ver artigo completo.](https://www.researchgate.net/publication/340059850_Classification_of_Weeds_and_Crops_at_the_Pixel-Level_Using_Convolutional_Neural_Networks_and_Data_Augmentation)',
    github: null,
    startDate: '2019-11-01T03:00:00.000Z',
    endDate: '2019-11-01T03:00:00.000Z',
    createAt: '2020-12-02T17:52:57.000Z',
    updateAt: '2020-12-02T17:52:57.000Z',
    visible: true,
    internalCode: null,
  },
];

const newIdWorks = [
  'e50ec99d-209d-4b23-bd94-28a2f876c424',
  '4423632f-65d3-4ac2-81ce-0eeff3c7b88b',
  '5623766e-4a10-467b-a0ad-61647342d67d',
  '8cdf0668-ae69-4545-9676-482f94745a97',
  'b7fc0add-bf2b-4145-9262-98502c2b7768',
  '1967b40c-4d9b-4262-86dc-7b856fffd735',
  'eab4746a-2e6e-457a-ae92-225e57d6757e',
  'af7b6fae-7fae-475d-bbce-39df9394b3e5',
  'b02703e5-0258-45e0-a0a5-b59b4c615e53',
  '2894f87c-d5f3-49b6-8a53-7d1d4175ea03',
  '3cc42b93-70c7-475b-b545-52393340225e',
  'd040234d-a402-4eb4-86de-df48aa409893',
  '6b729338-848d-463e-933e-a9d152ca07ce',
  '680294da-1b53-44c8-a4e2-cce38bb2707c',
  '4e3bdd44-a762-4b56-88a0-0697db7d137a',
  '9584580b-780d-4814-8d6c-64db78fe9549',
  '3253db3f-be49-4227-82a5-c8ff8f1391b3',
  '2d4c8767-37c7-4fd7-9df2-bbbb3e64d29b',
  'b871e770-519b-4cac-a173-27c5cd2da5cf',
  '75170ba4-d174-4235-9201-79fc1660f8b6',
  'bb631bf6-6bd1-489a-8e92-41e83b26d2c9',
  '476bcbc6-c0b7-41f6-96b1-913ca6ad78fa',
  '416c6b49-d9da-4e70-a904-93344c15a893',
  'aae296c9-57b1-40c8-be5b-44d464a9f79b',
  'f923b07a-c078-4374-93e2-d48aa3630eb6',
  '85d04206-4829-4b26-af92-a99da8a1b71e',
  '7ed0d995-0f52-46e5-9ced-ed824ccbb15f',
  '25be9a8a-35d5-4373-8e59-b298fb9a37c9',
  '9493fca3-d116-48bf-a223-2e0d1f3e43a7',
];

module.exports = {
  newIdWorks,
  oldWorks,
};
