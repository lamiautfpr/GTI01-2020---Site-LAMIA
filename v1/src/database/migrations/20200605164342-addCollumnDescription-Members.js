module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('members', 'description', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue:
        'Estou tendo muito projetos não consegui fazer minha descrição...',
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('members', 'description');
  },
};
