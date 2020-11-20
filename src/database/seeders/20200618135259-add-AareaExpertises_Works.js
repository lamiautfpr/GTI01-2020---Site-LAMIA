module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'areaExpertise_works',
      [
        {
          id: 1,
          area_expertise_id: 2,
          work_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          area_expertise_id: 2,
          work_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          area_expertise_id: 1,
          work_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          area_expertise_id: 2,
          work_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          area_expertise_id: 2,
          work_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          area_expertise_id: 3,
          work_id: 6,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          area_expertise_id: 3,
          work_id: 7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          area_expertise_id: 2,
          work_id: 8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          area_expertise_id: 2,
          work_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          area_expertise_id: 3,
          work_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 11,
          area_expertise_id: 2,
          work_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 12,
          area_expertise_id: 1,
          work_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          area_expertise_id: 2,
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
