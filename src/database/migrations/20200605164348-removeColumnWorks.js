module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('works', 'editorial');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('works', 'editorial', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
  },
};
