module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('typeWorks_works', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            type_work_id: {
                type: Sequelize.INTEGER,
                references: { model: 'type_works', key: 'id' },
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
        return queryInterface.dropTable('typeWorks_works');
    },
};
