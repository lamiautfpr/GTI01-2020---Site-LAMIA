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
            return `${process.env.APP_URL}/files/${this.path}`;
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
      foreignKey: 'picture_id	',
      as: 'works',
      through: 'pictures_works',
    });
  }
}

export default Picture;
