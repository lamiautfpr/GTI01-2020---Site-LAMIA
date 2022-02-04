module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('type_members', 'description', {
            type: Sequelize.TEXT,
            allowNull: true,
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('type_members', 'description', {
            type: Sequelize.TEXT,
            allowNull: false,
        });
    },
};
