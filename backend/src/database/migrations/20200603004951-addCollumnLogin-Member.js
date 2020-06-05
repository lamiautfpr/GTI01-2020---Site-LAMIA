module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('members', 'login', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('members', 'login');
  },
};
