module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('works', 'abstract');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('works', 'abstract', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};
