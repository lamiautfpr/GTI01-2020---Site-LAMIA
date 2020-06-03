module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('categoryWorks_works', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            category_work_id: {
                type: Sequelize.INTEGER,
                references: { model: 'category_works', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: true,
            },
            work_id: {
                type: Sequelize.INTEGER,
                references: { model: 'works', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
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
        return queryInterface.dropTable('categoryWorks_works');
    },
};
