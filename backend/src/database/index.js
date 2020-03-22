import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import TypeMember from '../app/models/TypeMember';
import Picture from '../app/models/Picture';

const models = [TypeMember, Picture];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
