import { Op } from 'sequelize';
import Partner from '../models/Partner';
import Work from '../models/Work';

class WorkController {
    async index(req, res) {
        const works = await Work.findAll();

        return res.json({ works });
    }
}

export default new WorkController();
