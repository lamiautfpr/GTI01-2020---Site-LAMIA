module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'area_expertises',
      [
        {
          id: 1,
          name: 'Ciência de Dados',
          description:
            'A Ciência de Dados é um campo interdisciplinar que utiliza algoritmos e sistemas científicos para extrair conhecimento e valor dos dados sejam eles econômicos, financeiros ou sociais, estruturados e não-estruturados. No LAMIA os nossos cientistas de dados combinam uma série de habilidades, incluindo estatísticas, ciência da computação e conhecimento científico, para analisar dados coletados da indústria, de negócios dos parceiros do laboratório, das cadeias produtivas do estado do Paraná e demandas de outros trabalhos e fontes científicas, na extração de conhecimento, detecção de padrões e obtenção de variáveis para possíveis tomadas de decisão.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Visão Computacional',
          description:
            'Visão computacional é a ciência e tecnologia das máquinas que interpretam e entendem o mundo visual, através das informação de imagens, vídeos ou quaisquer dados multidimensionais. No LAMIA nossos especialistas em machine learning utilizam de milhares de imagens digitais de câmeras e vídeos retirados do processo de operações e tarefas de indústrias, do agronegócio, de parceiros comerciais e de demandas específicas com fontes científicas, para desenvolver soluções que modelam e automatizam estas operações através da produção de softwares e hardwares avançados.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'GamTecnologia e Sociales',
          description:
            'São as áreas do LAMIA dedicadas ao desenvolvimento de tecnologias e softwares em parceria com outros grupos, laboratórios e projetos de pesquisa em diversas áreas do conhecimento e a execução de projetos com impacto social através do uso de ciência e tecnologias computacionais para benefício da comunidade externa e população em geral.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
