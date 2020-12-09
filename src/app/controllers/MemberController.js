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
      password: Yup.string().min(8),
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
        error: 'Member already exists :/ (Tente outro login ou email)',
      });
    }

    const member = await Member.create(
      { ...req.body, password: process.env.PASSWORD },
      {
        include: [
          {
            model: TypeMember,
            as: 'office',
            attributes: ['name'],
          },
        ],
      }
    );

    return res.json(member);
  }

  async index(req, res) {
    const officesMembers = await TypeMember.findAll({
      where: { [Op.not]: [{ name: 'administrator' }] },
      attributes: ['id', 'value', 'name', 'label', 'description'],
      order: [['id'], [{ model: Member, as: 'members' }, 'name', 'ASC']],
      include: [
        {
          model: Member,
          as: 'members',
          attributes: ['id', 'name', 'email', 'description', 'login'],
          order: ['name'],
          include: [
            {
              model: Picture,
              as: 'avatar',
              attributes: ['name', 'path', 'src'],
            },
          ],
        },
      ],
    });

    return res.json(officesMembers);
  }

  async show(req, res) {
    const member = await Member.findOne({
      where: {
        login: req.params.login,
      },
      attributes: [
        'name',
        'quoteName',
        'email',
        'linkedin',
        'gitHub',
        'lattes',
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
          attributes: ['responsibility'],
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
    try {
      const member = await Member.findByPk(req.userId, {
        include: [
          {
            model: TypeMember,
            as: 'office',
            attributes: ['name', 'label', 'id', 'value'],
          },
          {
            model: Picture,
            as: 'avatar',
            attributes: ['name', 'path', 'src'],
          },
        ],
      });

      if (!member) {
        return res.status(401).json({ error: 'Integrante não encontrado!' });
      }

      const { email, oldPassword, password } = req.body;

      if (email && email !== member.email) {
        const memberExists = await Member.findOne({ where: { email } });

        if (memberExists) {
          return res.status(400).json({ error: 'Email já utilizado!' });
        }
      }

      if (
        (password && !oldPassword) ||
        (oldPassword && !(await member.checkPassword(oldPassword)))
      ) {
        return res.status(401).json({ error: 'Senha atuação não compatível' });
      }
      delete member.password_hash;
      delete member.password;

      await member.update(req.body);

      return res.json(member);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new MemberController();
