module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'partners_works',
      [
        {
          id: 6,
          partner_id: 1,
          member_id: 15,
          work_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
