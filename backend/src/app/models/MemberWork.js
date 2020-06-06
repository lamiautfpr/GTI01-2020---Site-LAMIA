import Sequelize, { Model } from 'sequelize';

class MemberWork extends Model {
  static init(sequelize) {
    super.init(
      {
        member_id: Sequelize.INTEGER,
        work_id: Sequelize.INTEGER,
        scholarship: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'members_works',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Member, {
      foreignKey: 'member_id',
      as: 'memberData',
    });

    this.belongsTo(models.Work, {
      foreignKey: 'work_id',
      as: 'workData',
    });
  }
}

export default MemberWork;
