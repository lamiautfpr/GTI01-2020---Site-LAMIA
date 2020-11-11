module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'type_works',
      [
        {
          name: 'Pesquisa (Científica e Tecnológica)',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'Extensão',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'TCC',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'Mestrado',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'Livros e Partes de Livros',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Periódico',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Conferência',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Relatório',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Monografias e Dissertações',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Patente',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          name: 'Software',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          name: 'Consultoria',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          name: 'Cursos e Materiais Didáticos',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          name: 'Conferências e Congressos',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 4,
        },
        {
          name: 'Webinar e Qualifações',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 4,
        },
        {
          name: 'Reuniões e Confraternizações',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 4,
        },
      ],
      {}
    );
  },

  down: () => {},
};
