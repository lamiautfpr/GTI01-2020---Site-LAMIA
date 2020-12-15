import Sequelize, { Model } from 'sequelize';
import { format } from 'date-fns';

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
        git_hub: {
          type: Sequelize.STRING,
          allowNull: true,
          validate: {
            notEmpty: false,
          },
        },
        urlGithub: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.git_hub ? `https://github.com/${this.git_hub}` : null;
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
        dateBegin: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.date_end
              ? format(this.date_end, 'dd/MM/yyyy')
              : 'Em desenvolvimento';
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
    this.belongsToMany(models.Partner, {
      foreignKey: 'work_id',
      as: 'partners',
      through: 'partners_works',
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

    this.belongsToMany(models.Picture, {
      foreignKey: 'work_id',
      as: 'pictures',
      through: 'pictures_works',
    });

    this.hasMany(models.MemberWork, {
      foreignKey: 'work_id',
      as: 'worksMember',
    });
  }
}

export default Work;
