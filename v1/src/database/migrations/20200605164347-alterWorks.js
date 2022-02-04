module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('works', 'objective', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    queryInterface.changeColumn('works', 'abstract', {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    queryInterface.addColumn('works', 'visible', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      default: true,
    });
    queryInterface.addColumn('works', 'editorial', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    return queryInterface.addColumn('works', 'code', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.changeColumn('works', 'objective', {
      type: Sequelize.TEXT,
      allowNull: false,
    });
    queryInterface.changeColumn('works', 'abstract', {
      type: Sequelize.TEXT,
      allowNull: false,
    });

    queryInterface.removeColumn('works', 'visible');
    queryInterface.removeColumn('works', 'editorial');
    return queryInterface.removeColumn('works', 'code');
  },
};
