module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'pictures_works',
      [
        {
          picture_id: 16,
          work_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 17,
          work_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 18,
          work_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 19,
          work_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 20,
          work_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 21,
          work_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 22,
          work_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 23,
          work_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 24,
          work_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 25,
          work_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 26,
          work_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 27,
          work_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 28,
          work_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 29,
          work_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 34,
          work_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 30,
          work_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 31,
          work_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 32,
          work_id: 15,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          picture_id: 33,
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
