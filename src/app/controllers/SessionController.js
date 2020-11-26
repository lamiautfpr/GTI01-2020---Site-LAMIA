import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { Op } from 'sequelize';

import authConfig from '../../config/auth';
import Member from '../models/Member';
import Picture from '../models/Picture';
import TypeMember from '../models/TypeMember';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email(),
      login: Yup.string().when('email', (email, field) =>
        email ? field : field.required()
      ),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email = '', password, login = '' } = req.body;

    const member = await Member.findOne({
      where: {
        [Op.or]: [{ email }, { login }],
      },
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

    if (!member) return res.status(401).json({ error: 'Member not Found :(' });

    if (!(await member.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match :(' });
    }

    const { id } = member;
    member.password_hash = 'LAMIA - SH';

    return res.json({
      member,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
