import Sequelize, { Model } from 'sequelize';

class TypeMember extends Model {
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
        value: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.id;
          },
        },
        label: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.name;
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
    this.hasMany(models.Member, {
      foreignKey: 'office_id',
      as: 'members',
    });
  }
}

export default TypeMember;
