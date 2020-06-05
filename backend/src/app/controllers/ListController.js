import CategoryWork from '../models/CategoryWork';
import TypeMember from '../models/TypeMember';
import TypeWork from '../models/TypeWork';
import Work from '../models/Work';
import AreaExpertise from '../models/AreaExpertise';
import Member from '../models/Member';
import MemberWork from '../models/MemberWork';

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
        {
          model: Work,
          as: 'works',
          attributes: ['id', 'title', 'objective'],
          include: [
            {
              model: TypeWork,
              as: 'types',
              attributes: ['id', 'name', 'value', 'label'],
              through: {
                attributes: [],
              },
            },
            {
              model: AreaExpertise,
              as: 'areaExpertise',
              attributes: ['id', 'name', 'value', 'label'],
              through: {
                attributes: [],
              },
            },
            {
              model: MemberWork,
              as: 'worksMember',
              attributes: ['id'],
              include: [
                {
                  model: Member,
                  attributes: ['name', 'nameABNT'],
                  as: 'member',
                },
              ],
            },
          ],
          // through: {
          //   attributes: [],
          // },
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

    const category = await CategoryWork.findOne({
      where: { name },
    });

    if (!category) {
      return res.status(401).json({ error: 'Category not found :( Tururu...' });
    }

    const works = await Work.findAll({
      where: {
        category,
      },
    });

    return res.json(works);
  }
}

export default new ListController();
