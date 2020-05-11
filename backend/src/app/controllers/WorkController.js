import Partner from '../models/Partner';
import Work from '../models/Work';
import CategoryWork from '../models/CategoryWork';
import TypeWork from '../models/TypeWork';
import AreaExpertise from '../models/AreaExpertise';
import Member from '../models/Member';
import MemberWork from '../models/MemberWork';
import TypeMember from '../models/TypeMember';
import Picture from '../models/Picture';

class WorkController {
    async index(req, res) {
        const works = await Work.findAll({
            include: [
                {
                    model: Partner,
                    as: 'partner',
                    attributes: ['name'],
                },
                {
                    model: CategoryWork,
                    as: 'categories',
                    attributes: ['name'],
                    through: { attributes: [] },
                },
                {
                    model: TypeWork,
                    as: 'types',
                    attributes: ['name'],
                    through: { attributes: [] },
                },
                {
                    model: AreaExpertise,
                    as: 'areaExpertise',
                    attributes: ['name'],
                    through: { attributes: [] },
                },
                {
                    model: MemberWork,
                    as: 'worksMember',
                    attributes: ['scholarship'],
                    include: [
                        {
                            model: Member,
                            as: 'member',
                            attributes: ['name'],
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
                        },
                    ],
                },
            ],
            // attributes: ['id'],
            // order: ['id', 'DESC'],
        });

        // const works = await MemberWork.findAll({
        //     include: [
        //         {
        //             model: Work,
        //             as: 'works',
        //         },
        //         {
        //             model: Member,
        //             as: 'members',
        //         },
        //     ],
        // });

        return res.json(works);
    }

    async store(req, res) {
        /**
         * restringindo apenas para alunos membro
         * professores orientadores e coordernador
         */

        const memberResponsible = await Member.findByPk(req.userId);

        if (
            memberResponsible.office_id > 5 ||
            memberResponsible.office_id === 4
        ) {
            return res.status(401).json({ error: 'You not permission' });
        }

        const {
            title,
            objective,
            abstract,
            date_begin,
            category_id,
            typeWork_id,
            area_expertise_id,
            members_id,
            scholarship,
        } = req.body;

        const category = await CategoryWork.findByPk(category_id);

        if (!category) {
            return res.status(400).json({ error: 'Project  category invalid' });
        }

        const type = await TypeWork.findByPk(typeWork_id);

        if (!type) {
            return res.status(400).json({ error: 'Project  type invalid' });
        }

        const areaExpertise = await AreaExpertise.findByPk(area_expertise_id);

        if (!areaExpertise) {
            return res
                .status(400)
                .json({ error: 'Project  Area Expertise invalid' });
        }

        /**
         * Verificando se não existe membros invalidos seleconados
         */
        for (let i = 0; i < members_id.length; i++) {
            const member = await Member.findByPk(members_id[i]);

            if (!member) {
                return res
                    .status(400)
                    .json({ error: 'Member selected invalid' });
            }
        }

        const work = await Work.create({
            title,
            objective,
            abstract,
            date_begin,
        });

        work.addCategory(category);

        work.addType(type);

        work.addAreaExpertise(areaExpertise);

        /**
         * Add membros no Trabalho
         */
        for (let i = 0; i < members_id.length; i++) {
            await MemberWork.create({
                member_id: members_id[i],
                work_id: work.id,
                scholarship: false,
            });
        }

        /**
         * Add member responsavel no trabalho com bolsista ou não
         */
        if (scholarship) {
            await MemberWork.create({
                member_id: req.userId,
                work_id: work.id,
                scholarship,
            });
        } else {
            await MemberWork.create({
                member_id: req.userId,
                work_id: work.id,
                scholarship: false,
            });
        }

        return res.json({ work });
    }
}

export default new WorkController();
