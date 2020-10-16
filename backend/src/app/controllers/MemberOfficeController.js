import Member from '../models/Member';

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

      let member = await Member.findOne({ where: { login: req.body.login } });

      if (!member) {
        return res.status(401).json({ error: 'Membro não encontrado' });
      }

      member = await member.update(req.body);
      // return res.json(member);

      return res.json(member);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new MemberOfficeController();
