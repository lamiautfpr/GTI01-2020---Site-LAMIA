module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'partners_works',
      [
        {
          work_id: 6,
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 6,
          partner_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 6,
          partner_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 6,
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 6,
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 7,
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 7,
          partner_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 7,
          partner_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 7,
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 7,
          partner_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 9,
          partner_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          work_id: 10,
          partner_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
