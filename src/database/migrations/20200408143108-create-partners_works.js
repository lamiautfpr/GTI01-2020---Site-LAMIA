module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('partners_works', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      editorial: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      abstract: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      partner_id: {
        type: Sequelize.INTEGER,
        references: { model: 'partners', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    return queryInterface.dropTable('partners_works');
  },
};
