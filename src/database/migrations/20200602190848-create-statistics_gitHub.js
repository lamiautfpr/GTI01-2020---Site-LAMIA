module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('statistics', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      count_repositories: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      count_commits: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      count_branches: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      count_stars: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('statistics');
  },
};
