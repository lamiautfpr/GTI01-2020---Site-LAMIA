module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('members', 'login', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('members', 'login');
  },
};
