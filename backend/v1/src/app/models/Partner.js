import Sequelize, { Model } from 'sequelize';

class Partner extends Model {
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
                logo: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
                linkPage: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
            },
            {
                sequelize,
            }
        );

        return this;
    }
}

export default Partner;
