module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'category_works',
      [
        {
          id: 1,
          name: 'Produtos',
          description:
            'Tecnologias e soluções desenvolvidas pelo LAMIA em forma de produto que são registradas formalmente nos órgãos oficiais (INPI e FUNTEF) e podem ser colocadas em produção para resolver problemas de empresas, indústrias e organizações do setor público e privado.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: 'Projetos',
          description:
            'Projetos de pesquisa em desenvolvimento ou já finalizados pelo LAMIA com foco na pesquisa científica e aplicação das soluções em ambientes de produção de empresas, indústrias e organizações públicas.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: 'Publicações',
          description:
            'Divulgação dos resultados obtidos nas diversas pesquisas e provas de conceito realizadas pelo LAMIA na forma de artigos e demais artefatos científicos publicados em periódicos e conferências.',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Eventos',
          description:
            'Organização e participação em eventos científicos, técnicos, webinar e eventos de qualificação, meetups e confraternizações dos integrantes do LAMIA.',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
