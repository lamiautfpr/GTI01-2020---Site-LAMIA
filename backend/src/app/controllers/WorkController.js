import Partner from '../models/Partner';
import Work from '../models/Work';
import CategoryWork from '../models/CategoryWork';
import TypeWork from '../models/TypeWork';
import AreaExpertise from '../models/AreaExpertise';

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
            ],
        });

        return res.json({ works });
    }

    async store(req, res) {
        const {
            title,
            objective,
            abstract,
            date_begin,
            category_id,
            typeWork_id,
            area_expertise_id,
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

        const work = await Work.create({
            title,
            objective,
            abstract,
            date_begin,
        });

        work.addCategory(category);

        work.addType(type);

        work.addAreaExpertise(areaExpertise);

        return res.json({ work });
    }
}

export default new WorkController();
