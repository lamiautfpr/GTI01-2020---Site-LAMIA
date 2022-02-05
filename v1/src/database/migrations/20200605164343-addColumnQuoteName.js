module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('members', 'quote_name', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('members', 'quote_name');
  },
};
