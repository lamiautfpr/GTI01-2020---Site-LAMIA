import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import TypeMember from '../app/models/TypeMember';
import Picture from '../app/models/Picture';
import Member from '../app/models/Member';
import AreaExpertise from '../app/models/AreaExpertise';
import CategoryWork from '../app/models/CategoryWork';
import TypeWork from '../app/models/TypeWork';
import Partner from '../app/models/Partner';
import Work from '../app/models/Work';
import MemberWork from '../app/models/MemberWork';
import Statistic from '../app/models/Statistic';
import News from '../app/models/News';

const models = [
  TypeMember,
  Picture,
  Member,
  AreaExpertise,
  CategoryWork,
  TypeWork,
  Partner,
  Work,
  MemberWork,
  Statistic,
  News,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
