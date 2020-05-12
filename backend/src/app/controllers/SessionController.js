import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import Member from '../models/Member';
import Picture from '../models/Picture';
import TypeMember from '../models/TypeMember';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const member = await Member.findOne({
      where: { email },
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

    if (!member) return res.status(401).json({ error: 'Member not Found :(' });

    if (!(await member.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does nort match :(' });
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
