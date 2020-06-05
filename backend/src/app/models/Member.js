import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Member extends Model {
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
        nameABNT: {
          type: Sequelize.VIRTUAL,
          get() {
            const names = this.name.split(' ');

            if (names.length >= 3) {
              const lastName = names[names.length - 1];
              const nameABNT = `${lastName.toUpperCase()}, ${names[0]
                .charAt(0)
                .toUpperCase()}. ${names[1].charAt(0).toUpperCase()}.`;

              return nameABNT;
            }
            if (names.length === 2) {
              const lastName = names[names.length - 1];
              const nameABNT = `${lastName.toUpperCase()}, ${names[0]
                .charAt(0)
                .toUpperCase()}.`;

              return nameABNT;
            }
            return this.name.toUpperCase();
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        password_hash: Sequelize.STRING,
        password: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          unique: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        likendin: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        urlLikendin: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.likendin
              ? `https://www.linkedin.com/in/${this.likendin}`
              : null;
          },
        },
        git_hub: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        urlGithub: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.git_hub ? `https://github.com/${this.git_hub}` : null;
          },
        },
        lattes: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        urlLattes: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.lattes ? `http://lattes.cnpq.br/${this.lattes}` : null;
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Picture, {
      foreignKey: 'avatar_id',
      as: 'avatar',
    });
    this.belongsTo(models.TypeMember, {
      foreignKey: 'office_id',
      as: 'office',
    });

    this.hasMany(models.MemberWork, {
      foreignKey: 'member_id',
      as: 'works',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Member;
