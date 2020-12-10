import { Op } from 'sequelize';

import Member from '../models/Member';
import TypeMember from '../models/TypeMember';
import Picture from '../models/Picture';

class OfficeController {
  async index(req, res) {
    const { office } = req.params;
    const name = office
      .substring(0, 1)
      .toUpperCase()
      .concat(office.substring(1));

    const members = await Member.findAll({
      attributes: ['id', 'name', 'description', 'login'],
      include: [
        {
          model: TypeMember,
          as: 'office',
          attributes: [],
          where: {
            name: {
              [Op.or]: [name, 'Coordenador'],
            },
          },
        },
        {
          model: Picture,
          as: 'avatar',
          attributes: ['id', 'name', 'path', 'src', 'source'],
        },
      ],
      order: [
        ['office_id', 'ASC'],
        ['name', 'ASC'],
      ],
    });

    if (!members) {
      return res.json(null);
    }
    return res.json(members);
  }
}

export default new OfficeController();
