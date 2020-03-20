import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import TypeMember from '../app/models/TypeMember';

const models = [TypeMember];

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
