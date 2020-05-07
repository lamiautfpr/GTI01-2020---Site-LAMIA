module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('type_works', 'category_id', {
            type: Sequelize.INTEGER,
            allowNull: true,
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn('type_works', 'category_id');
    },
};
