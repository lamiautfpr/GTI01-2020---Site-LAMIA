import * as Yup from 'yup';
import { Op } from 'sequelize';
import Member from '../models/Member';
import TypeMember from '../models/TypeMember';
import Picture from '../models/Picture';
import MemberWork from '../models/MemberWork';
import Work from '../models/Work';
import AreaExpertise from '../models/AreaExpertise';
import TypeWork from '../models/TypeWork';

class MemberController {
  async store(req, res) {
    const phoneExp = new RegExp('\\(\\d{2,}\\) \\d{4,}\\-\\d{4}');

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      login: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(8),
      phone: Yup.string().matches(phoneExp),
      likendin: Yup.string(),
      git_hub: Yup.string(),
      lattes: Yup.string(),
      office_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const memberExists = await Member.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { login: req.body.login }],
      },
    });

    if (memberExists) {
      return res.status(400).json({
        error: 'Member already exists :/ <br/>Tente outro login ou email ;)',
      });
    }

    const { id, name, email, office_id } = await Member.create(req.body, {
      include: [
        {
          model: TypeMember,
          as: 'office',
          attributes: ['name'],
        },
      ],
    });

    return res.json({
      id,
      name,
      email,
      office_id,
    });
  }

  async index(req, res) {
    const members = await Member.findAll({
      attributes: ['id', 'name', 'email', 'description', 'login'],
      include: [
        {
          model: TypeMember,
          as: 'office',
          attributes: ['id', 'value', 'name', 'label', 'description'],
        },
        {
          model: Picture,
          as: 'avatar',
          attributes: ['name', 'path', 'src'],
        },
      ],
    });

    const officesMembers = await TypeMember.findAll({
      attributes: ['id', 'value', 'name', 'label', 'description'],
      order: ['name'],
    });

    return res.json({ members, officesMembers });
  }

  async show(req, res) {
    const member = await Member.findOne({
      where: {
        login: req.params.login,
      },
      attributes: [
        'name',
        'nameABNT',
        'email',
        'phone',
        'likendin',
        'urlLikendin',
        'git_hub',
        'urlGithub',
        'lattes',
        'urlLattes',
        'description',
      ],
      include: [
        {
          model: TypeMember,
          as: 'office',
          attributes: ['id', 'value', 'name', 'label', 'description'],
        },
        {
          model: Picture,
          as: 'avatar',
          attributes: ['name', 'path', 'src', 'source'],
        },
        {
          model: MemberWork,
          as: 'works',
          attributes: ['scholarship'],
          include: [
            {
              model: Work,
              as: 'workData',
              attributes: [
                'id',
                'title',
                'objective',
                'date_begin',
                'dateBegin',
                'git_hub',
                'urlGithub',
              ],
              include: [
                {
                  model: Picture,
                  as: 'pictures',
                  attributes: ['id', 'name', 'path', 'src', 'source'],
                  through: { attributes: [] },
                },
                {
                  model: AreaExpertise,
                  as: 'areaExpertise',
                  attributes: ['label', 'name'],
                  through: { attributes: [] },
                },
                {
                  model: TypeWork,
                  as: 'types',
                  attributes: ['label', 'name'],
                  through: { attributes: [] },
                },
              ],
            },
          ],
        },
      ],
    });
    return res.json(member);
  }

  async update(req, res) {
    const phoneExp = new RegExp('\\(\\d{2,}\\) \\d{4,}\\-\\d{4}');

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      phone: Yup.string().matches(phoneExp),
      likendin: Yup.string(),
      git_hub: Yup.string(),
      lattes: Yup.string(),
      office_id: Yup.number(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(8)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const member = await Member.findByPk(req.userId, {
      include: [
        {
          model: TypeMember,
          as: 'office',
          attributes: ['name'],
        },
        {
          model: Picture,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    // acredito que essa validação não seja necessaria
    if (!member) {
      return res.status(401).json({ error: 'Email does not found' });
    }

    if (email && email !== member.email) {
      const memberExists = await Member.findOne({ where: { email } });

      if (memberExists) {
        return res.status(400).json({ error: 'Member alrealy exists' });
      }
    }

    if (oldPassword && !(await member.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await member.update(req.body);

    member.password_hash = 'LAMIA - SH';
    return res.json({
      member,
    });
  }
}

export default new MemberController();
