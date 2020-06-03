import Member from '../models/Member';
import TypeMember from '../models/TypeMember';
import Picture from '../models/Picture';

class OfficeController {
  async index(req, res) {
    const { office } = req.params;

    const members = await TypeMember.findAll({
      where: {
        name: office
          .substring(0, 1)
          .toUpperCase()
          .concat(office.substring(1))
          .substring(0, office.length - 1),
      },
      attributes: ['id', 'name', 'description'],
      include: [
        {
          model: Member,
          as: 'members',
          attributes: [
            'name',
            'email',
            'phone',
            'likendin',
            'git_hub',
            'lattes',
          ],
          include: [
            {
              model: Picture,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
      ],
    });

    return res.json({ members });
  }
}

export default new OfficeController();
