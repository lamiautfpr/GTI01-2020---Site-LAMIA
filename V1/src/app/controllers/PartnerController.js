import * as Yup from 'yup';
import Partner from '../models/Partner';

class PartnerController {
  async index(req, res) {
    const partner = await Partner.findAll({
      attributes: ['id', 'name', 'logo', 'linkPage'],
      order: [['name', 'ASC']],
    });

    return res.json(partner);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { name } = req.query;

    const partner = await Partner.findOrCreate({
      where: { name: name.toUpperCase() },
    });
    return res.json({ partner });
  }
}

export default new PartnerController();
