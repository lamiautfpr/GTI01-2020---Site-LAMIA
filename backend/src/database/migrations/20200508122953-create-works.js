module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('works', {
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
            objective: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            abstract: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            git_hub: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            date_begein: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            date_End: {
                type: Sequelize.DATE,
                allowNull: true,
            },
            partner_id: {
                type: Sequelize.INTEGER,
                references: { model: 'partners', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
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
        return queryInterface.dropTable('works');
    },
};
