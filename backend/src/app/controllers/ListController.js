import CategoryWork from '../models/CategoryWork';
import TypeMember from '../models/TypeMember';
import TypeWork from '../models/TypeWork';
import Work from '../models/Work';

class ListController {
  async show(req, res) {
    const name =
      req.params.category.charAt(0).toUpperCase() +
      req.params.category.slice(1);

    if (name === 'Members') {
      const typeMembers = await TypeMember.findAll({
        attributes: ['id', 'name', 'value', 'label', 'description'],
        order: ['name'],
      });
      return res.json({
        name: 'Integrantes',
        router: 'members',
        description: null,
        types: typeMembers,
      });
    }
    const categoryWorks = await CategoryWork.findOne({
      where: { name },
      attributes: ['id', 'name', 'description', 'router'],
      include: [
        {
          model: TypeWork,
          as: 'types',
          attributes: ['id', 'name', 'value', 'label', 'description'],
          order: ['name'],
        },
      ],
      order: ['name'],
    });
    return res.json(categoryWorks);
  }

  async index(req, res) {
    const name =
      req.params.category.charAt(0).toUpperCase() +
      req.params.category.slice(1);

    const category_id = await CategoryWork.findOne({
      where: { name },
    });

    if (!category_id) {
      return res.status(401).json({ error: 'Category not found :( Tururu...' });
    }

    const works = await Work.findAll({
      where: {
        category_id,
      },
    });
  }
}

export default new ListController();
