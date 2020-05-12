import * as Yup from 'yup';
import AreaExpertise from '../models/AreaExpertise';

class AreaExpertiseController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { name, description } = req.body;

    if (description === '')
      return res.status(400).json({ error: 'Description cannot be empty :/' });

    const areaExpertiseExists = await AreaExpertise.findOne({
      where: { name },
    });

    if (areaExpertiseExists)
      return res
        .status(400)
        .json({ error: 'Area Expertise already exists :/' });

    const areaExpertise = await AreaExpertise.create({ name, description });

    return res.json({ areaExpertise });
  }

  async index(req, res) {
    const areaExpertises = await AreaExpertise.findAll();
    return res.json({ areaExpertises });
  }

  async update(req, res) {
    const { name, description } = req.body;

    if (description === '')
      return res.status(400).json({ error: 'Description cannot be empty :/' });

    const areaExpertise = await AreaExpertise.findOne({ where: { name } });

    if (!areaExpertise)
      return res.status(400).json({ error: 'Area Expertise not exists :/' });

    await areaExpertise.update({ name, description });

    return res.json({ areaExpertise });
  }

  async delete(req, res) {
    const { name } = req.body;

    await AreaExpertise.destroy({ where: { name } });

    return res.json({ ok: true });
  }
}

export default new AreaExpertiseController();
