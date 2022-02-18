module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('members', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password_hash: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            likendin: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            git_hub: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            lattes: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
            },
            avatar_id: {
                type: Sequelize.INTEGER,
                references: { model: 'pictures', key: 'id' },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
                allowNull: true,
            },
            office_id: {
                type: Sequelize.INTEGER,
                references: { model: 'type_members', key: 'id' },
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
        return queryInterface.dropTable('pictures');
    },
};
