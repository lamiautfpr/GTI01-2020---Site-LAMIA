import Sequelize, { Model } from 'sequelize';

class Picture extends Model {
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
                path: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `http://localhost:3333/files/${this.path}`;
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

export default Picture;
