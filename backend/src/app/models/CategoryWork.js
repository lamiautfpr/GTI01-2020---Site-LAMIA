import Sequelize, { Model } from 'sequelize';

class CategoryWork extends Model {
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
      foreignKey: 'category_work_id',
      as: 'works',
      through: 'categoryWorks_works',
    });

    this.hasMany(models.TypeWork, {
      foreignKey: 'category_id',
      as: 'types',
    });
  }
}

export default CategoryWork;
