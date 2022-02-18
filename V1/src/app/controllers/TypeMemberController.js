import * as Yup from 'yup';
import TypeMember from '../models/TypeMember';

class TypeMemberController {
  // Função para cadastro!!!
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

    const typeMemberExists = await TypeMember.findOne({ where: { name } });

    if (typeMemberExists)
      return res.status(400).json({ error: 'Type Member already exists :/' });

    const typeMember = await TypeMember.create({ name, description });

    return res.json({ typeMember });
  }

  async index(req, res) {
    const typeMembers = await TypeMember.findAll({
      attributes: ['id', 'value', 'name', 'label', 'description'],
      order: ['name'],
    });
    return res.json({
      name: 'Integrantes',
      router: 'members',
      description: null,
      types: typeMembers,
    });
  }

  async update(req, res) {
    const { name, description } = req.body;

    if (description === '')
      return res.status(400).json({ error: 'Description cannot be empty :/' });

    const typeMember = await TypeMember.findOne({ where: { name } });

    if (!typeMember)
      return res.status(400).json({ error: 'Type Member not exists :/' });

    await typeMember.update({ name, description });

    return res.json({ typeMember });
  }

  async delete(req, res) {
    const { name } = req.body;

    await TypeMember.destroy({ where: { name } });

    return res.json({ ok: true });
  }
}

export default new TypeMemberController();
