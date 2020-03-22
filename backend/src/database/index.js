import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import TypeMember from '../app/models/TypeMember';
import Picture from '../app/models/Picture';
import Member from '../app/models/Member';

const models = [TypeMember, Picture, Member];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models
            .map(model => model.init(this.connection))
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
    }
}

export default new Database();
