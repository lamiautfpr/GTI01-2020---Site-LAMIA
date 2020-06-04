module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'category_works',
      [
        {
          name: 'Produtos',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Projetos',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Publicações',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
