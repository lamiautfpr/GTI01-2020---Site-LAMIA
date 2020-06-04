import * as Yup from 'yup';
import CategoryWork from '../models/CategoryWork';
import TypeWork from '../models/TypeWork';

class CategoryWorkController {
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

    const categoryWorkExists = await CategoryWork.findOne({
      where: { name },
    });

    if (categoryWorkExists)
      return res.status(400).json({ error: 'Category Work already exists :/' });

    const categoryWork = await CategoryWork.create({ name, description });

    return res.json({ categoryWork });
  }

  async index(req, res) {
    const categoryWorks = await CategoryWork.findAll({
      attributes: ['name', 'description'],
      include: [
        {
          model: TypeWork,
          as: 'types',
          attributes: ['name', 'description'],
        },
      ],
    });
    return res.json(categoryWorks);
  }

  async update(req, res) {
    const { name, description } = req.body;

    if (description === '')
      return res.status(400).json({ error: 'Description cannot be empty :/' });

    const categoryWork = await CategoryWork.findOne({ where: { name } });

    if (!categoryWork)
      return res.status(400).json({ error: 'Category Work not exists :/' });

    await categoryWork.update({ name, description });

    return res.json({ categoryWork });
  }

  async delete(req, res) {
    const { name } = req.body;

    await CategoryWork.destroy({ where: { name } });

    return res.json({ ok: true });
  }
}

export default new CategoryWorkController();
