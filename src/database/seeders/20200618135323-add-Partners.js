module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'partners',
      [
        {
          id: 1,
          name: 'Associação Comercial e Empresarial de Santa Helena - ACISA',

          link_page: 'https://www.acisash.com.br/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name:
            'Associação de Empresas de Tecnologia de Informação e Comunicação do Oeste do Paraná - Iguassu-IT',

          link_page: 'http://www.iguassuit.com.br/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name:
            'Associação Brasil Internacional de Inventores, Cientistas e Empreendedores Inovadores - ABIPIR',

          link_page: 'http://abipir.org.br/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: 'Sistema Regional de Inovação - SRI',

          link_page: 'https://plataformasri.pti.org.br/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: 'Iguassu Valley - IG',

          link_page: 'https://www.iguassuvalley.com.br/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: 'SWA Sistemas - SWA',
          link_page: 'https://www.swa.com.br/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          name: 'Grupo de Inteligência Computacional - GIC',
          link_page: 'https://www.facebook.com/GICmed/',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          name:
            'Grupo de Pesquisa em Ciência e Tecnologia da Geoinformação - GISTech',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
