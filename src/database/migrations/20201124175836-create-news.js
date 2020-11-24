module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('news', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cover: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date_publication: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      font: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'LAMIA',
      },
      source: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable('news');
  },
};
