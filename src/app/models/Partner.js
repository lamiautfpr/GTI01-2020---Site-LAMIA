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
        logoUrl: {
          type: Sequelize.VIRTUAL,
          get() {
            if (
              this.logo &&
              (this.logo.includes('https://') || this.logo.includes('http://'))
            ) {
              return this.logo;
            }
            if (!this.logo) {
              return null;
            }
            return `${process.env.APP_URL}/files/${this.logo}`;
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
