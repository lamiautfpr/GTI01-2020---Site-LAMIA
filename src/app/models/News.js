import Sequelize, { Model } from 'sequelize';
import { format } from 'date-fns';

class News extends Model {
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
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        date_publication: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        datePublication: {
          type: Sequelize.VIRTUAL,
          get() {
            const dateFormatted = format(this.date_publication, 'dd/MM/yyyy');
            return dateFormatted;
          },
        },
        cover: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        coverUrl: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.cover}`;
          },
        },
        font: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        source: {
          type: Sequelize.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Picture, {
      foreignKey: 'news_id',
      as: 'pictures',
      through: 'pictures_news',
    });
  }
}

export default News;
