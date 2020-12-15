import CategoryWork from '../models/CategoryWork';
import TypeMember from '../models/TypeMember';
import TypeWork from '../models/TypeWork';
import Work from '../models/Work';
import AreaExpertise from '../models/AreaExpertise';
import Member from '../models/Member';
import MemberWork from '../models/MemberWork';
import Picture from '../models/Picture';

class ListController {
  async show(req, res) {
    const name = req.params.category;

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
          attributes: ['id', 'title', 'date_end', 'dateBegin', 'objective'],
          include: [
            {
              model: Picture,
              as: 'pictures',
              attributes: ['id', 'name', 'path', 'src', 'source'],
              through: { attributes: [] },
            },
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
                  as: 'memberData',
                  attributes: ['name', 'quoteName', 'login'],
                },
              ],
            },
          ],
          // through: {
          //   attributes: [],
          // },
        },
      ],
      order: [
        ['name', 'asc'],
        [{ model: Work, as: 'works' }, 'date_end', 'DESC'],
      ],
    });
    return res.json(categoryWorks);
  }
}

export default new ListController();
