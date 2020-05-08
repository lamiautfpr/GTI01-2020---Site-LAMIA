module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('members_works', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            members_id: {
                type: Sequelize.INTEGER,
                references: { model: 'members', key: 'id' },
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
            scholarship: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                default: false,
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
        return queryInterface.dropTable('members_works');
    },
};
