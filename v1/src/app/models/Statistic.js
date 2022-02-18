import Sequelize, { Model } from 'sequelize';

class Statistic extends Model {
  static init(sequelize) {
    super.init(
      {
        countRepositories: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        countCommits: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        countBranches: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        countStars: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            notNull: true,
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
}

export default Statistic;
