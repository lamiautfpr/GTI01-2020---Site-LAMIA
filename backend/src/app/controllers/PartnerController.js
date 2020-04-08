import { Op } from 'sequelize';
import Partner from '../models/Partner';

class PartnerController {
    async index(req, res) {
        const { name } = req.query;

        const partner = await Partner.findAll({
            where: { name: { [Op.like]: `%${name.toUpperCase()}%` } },
            order: [['name', 'ASC']],
        });

        return res.json({ partner });
    }

    async show(req, res) {
        const { name } = req.query;

        const partner = await Partner.findOrCreate({
            where: { name: name.toUpperCase() },
        });
        return res.json({ partner });
    }
}

export default new PartnerController();
