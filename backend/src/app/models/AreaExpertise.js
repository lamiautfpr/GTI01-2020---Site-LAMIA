import Sequelize, { Model } from 'sequelize';

class AreaExpertise extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                description: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: true,
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
        this.belongsToMany(models.Work, {
            foreignKey: 'area_expertise_id',
            as: 'works',
            through: 'areaExpertise_works',
        });
    }
}

export default AreaExpertise;
