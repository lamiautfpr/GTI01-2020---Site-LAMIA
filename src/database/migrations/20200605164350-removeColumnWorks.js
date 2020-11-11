module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn('works', 'partner_id');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('works', 'partner_id', {
      type: Sequelize.INTEGER,
      references: { model: 'partners', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },
};
