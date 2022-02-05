module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('members_works', 'responsibility', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('members_works', 'responsibility', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    });
  },
};
