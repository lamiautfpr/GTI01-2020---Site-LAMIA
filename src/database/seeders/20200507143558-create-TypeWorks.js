module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'type_works',
      [
        {
          name: 'Pesquisa',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'Pós Graduação',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'Inciação',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'Extesão',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 2,
        },
        {
          name: 'Livro',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Partes de Livro',
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
          name: 'Congresso',
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
          name: 'TCC',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Tese',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 3,
        },
        {
          name: 'Dissertação',
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
          name: 'Consutoria',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
        {
          name: 'Material',
          created_at: new Date(),
          updated_at: new Date(),
          category_id: 1,
        },
      ],
      {}
    );
  },

  down: () => {},
};
