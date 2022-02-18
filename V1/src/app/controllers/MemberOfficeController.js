import Member from '../models/Member';
import TypeMember from '../models/TypeMember';

class MemberOfficeController {
  async update(req, res) {
    try {
      const memberLogged = await Member.findByPk(req.userId);

      if (
        !memberLogged ||
        (memberLogged.office_id !== 1 &&
          memberLogged.office_id !== 2 &&
          memberLogged.office_id !== 3)
      ) {
        return res
          .status(402)
          .json({ error: 'Você não possui essa permissão' });
      }

      const member = await Member.findOne({
        where: { login: req.body.login },
        include: [
          {
            model: TypeMember,
            as: 'office',
            attributes: ['id', 'value', 'name', 'label', 'description'],
          },
        ],
      });

      if (!member) {
        return res.status(401).json({ error: 'Membro não encontrado' });
      }

      await member.update(req.body);

      const memberUpdated = await Member.findOne({
        where: { login: req.body.login },
        include: [
          {
            model: TypeMember,
            as: 'office',
            attributes: ['id', 'value', 'name', 'label', 'description'],
          },
        ],
      });

      return res.json(memberUpdated);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new MemberOfficeController();
