import * as Yup from 'yup';
import Member from '../models/Member';
import TypeMember from '../models/TypeMember';
import Picture from '../models/Picture';

class MemberController {
    async store(req, res) {
        const phoneExp = new RegExp('\\(\\d{2,}\\) \\d{4,}\\-\\d{4}');

        const schema = Yup.object().shape({
            name: Yup.string().required(),
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
            where: { email: req.body.email },
        });

        if (memberExists) {
            return res.status(400).json({ error: 'Member already exists :/' });
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

        return res.json({ members });
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
