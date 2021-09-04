import Member from '../models/Member';
import TypeMember from '../models/TypeMember';

class MemberAvatarController {
  async update(req, res) {
    try {
      const responsibleMember = await Member.findByPk(req.userId, {
        include: [
          {
            model: TypeMember,
            as: 'office',
            attributes: ['name', 'label', 'id', 'value'],
          },
        ],
      });

      if (
        responsibleMember.office.label !== 'Coordenador' &&
        responsibleMember.office.label !== 'administrator'
      ) {
        return res.status(403).json({
          error: 'Você não tem permissão para resetar a senha de um membro',
        });
      }

      const member = await Member.findByPk(req.params.id);

      if (!member) {
        return res.status(400).json({ error: 'Membro não encontrado' });
      }

      await member.update({ password: process.env.PASSWORD });

      return res.json(member);
    } catch (err) {
      return res
        .status(400)
        .json({ message: 'Erro ao redefinir senha do membro!', err });
    }
  }
}

export default new MemberAvatarController();
