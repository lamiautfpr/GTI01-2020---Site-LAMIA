module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'typeWorks_works',
      [
        {
          id: 1,
          type_work_id: 3,
          work_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          type_work_id: 1,
          work_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          type_work_id: 1,
          work_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          type_work_id: 1,
          work_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          type_work_id: 3,
          work_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          type_work_id: 2,
          work_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          type_work_id: 2,
          work_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          type_work_id: 1,
          work_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          type_work_id: 1,
          work_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          type_work_id: 1,
          work_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          type_work_id: 3,
          work_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          type_work_id: 4,
          work_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          type_work_id: 11,
          work_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 14,
          type_work_id: 11,
          work_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 15,
          type_work_id: 11,
          work_id: 15,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 16,
          type_work_id: 14,
          work_id: 16,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
