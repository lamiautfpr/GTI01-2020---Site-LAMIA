import Sequelize, { Model } from 'sequelize';

class Work extends Model {
    static init(sequelize) {
        super.init(
            {
                title: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                objective: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                abstract: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                git_hub: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    validate: {
                        notEmpty: false,
                    },
                },
                date_begin: {
                    type: Sequelize.DATE,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                date_end: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    validate: {
                        notEmpty: false,
                    },
                },
                status: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return this.data_end ? 'Finalizado' : 'Desenvolvendo';
                    },
                },
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Partner, {
            foreignKey: 'partner_id',
            as: 'partner',
        });

        this.belongsToMany(models.CategoryWork, {
            foreignKey: 'work_id',
            as: 'categories',
            through: 'categoryWorks_works',
        });

        this.belongsToMany(models.TypeWork, {
            foreignKey: 'work_id',
            as: 'types',
            through: 'typeWorks_works',
        });
        this.belongsToMany(models.AreaExpertise, {
            foreignKey: 'work_id',
            as: 'areaExpertise',
            through: 'areaExpertise_works',
        });
    }
}

export default Work;
