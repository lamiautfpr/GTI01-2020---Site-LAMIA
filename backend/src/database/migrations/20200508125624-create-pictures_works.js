module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('pictures_works', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            pictures_id: {
                type: Sequelize.INTEGER,
                references: { model: 'pictures', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
                allowNull: true,
            },
            works_id: {
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
        return queryInterface.dropTable('pictures_works');
    },
};
