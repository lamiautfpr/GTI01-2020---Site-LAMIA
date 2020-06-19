module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'pictures',
      [
        {
          name: 'Teacher.jpg',
          path: 'teacher.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Member.jpg',
          path: 'member.jpg',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'brilhador.jpg',
          path:
            'https://avatars3.githubusercontent.com/u/12647555?s=400&u=70146e57343024d023c8edbf9acefc65430ae0bd&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'guiyshd.jpg',
          path:
            'https://avatars0.githubusercontent.com/u/64761267?s=400&u=bcb343a6e6aeec391a271dbf68d1ac6643959fc8&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'XavierJece.jpg',
          path:
            'https://avatars3.githubusercontent.com/u/45216867?s=400&u=6f7298acde11800b773449d637882be9dcb887b7&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'JCMArtin.pjg',
          path:
            'https://avatars3.githubusercontent.com/u/51566081?s=400&u=a977c2fba037112a09eed5831edae3b41306176c&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'eduarte.jpg',
          path:
            'https://avatars1.githubusercontent.com/u/30278417?s=400&u=ba39c090e1ff25455b7338d02267cc6fed607eee&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'LuisFernando.jpg',
          path:
            'https://avatars2.githubusercontent.com/u/55769006?s=400&u=45cdaa5e1d403095c02642d63a24f9fdf0b8a41f&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'RafaelLechensque.jpg',
          path:
            'https://avatars3.githubusercontent.com/u/55768846?s=400&u=25dc9bbd395c0936834f8ae8c3a4d5d81acd363d&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'naves.jpg',
          path:
            'https://avatars1.githubusercontent.com/u/26206052?s=400&u=d175cce812ed2fc706dfb2a94fb6f1e1ffd062ae&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'wdestro.jpg',
          path:
            'https://avatars2.githubusercontent.com/u/45181652?s=400&u=30fb0e68cf69cc563ccfaa88641906bc97e5a0c0&v=4',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
