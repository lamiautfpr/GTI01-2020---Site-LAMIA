module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'members',
      [
        {
          name: 'Support - Brainiac.jpg',
          path: 'b16fd9f27938bfef37233d22fc67d209.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
