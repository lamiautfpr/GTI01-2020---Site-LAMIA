import * as Yup from 'yup';

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
          attributes: ['responsibility'],
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

    return res.json(works);
  }

  async show(req, res) {
    const { id } = req.params;

    const idTreated = id
      .split('')
      .filter(n => Number(n) || n === 0)
      .join('');

    if (!idTreated) {
      return res.json(null);
    }

    const work = await Work.findByPk(idTreated, {
      include: [
        {
          model: Partner,
          as: 'partner',
          // attributes: ['name', 'label'],
        },
        {
          model: CategoryWork,
          as: 'categories',
          // attributes: ['name', 'label'],
          through: { attributes: [] },
        },
        {
          model: TypeWork,
          as: 'types',
          attributes: ['name', 'label'],
          through: { attributes: [] },
        },
        {
          model: AreaExpertise,
          as: 'areaExpertise',
          attributes: ['name', 'label'],
          through: { attributes: [] },
        },
        {
          model: Picture,
          as: 'pictures',
          attributes: ['name', 'path', 'src', 'source', 'width', 'height'],
        },
        {
          model: MemberWork,
          as: 'worksMember',
          attributes: ['responsibility'],
          include: [
            {
              model: Member,
              as: 'memberData',
              attributes: ['name', 'login', 'quoteName'],
              include: [
                {
                  model: TypeMember,
                  as: 'office',
                  attributes: ['name'],
                },
                {
                  model: Picture,
                  as: 'avatar',
                  attributes: ['name', 'path', 'src'],
                },
              ],
            },
          ],
        },
      ],
    });

    return res.json(work);
  }

  async store(req, res) {
    /**
     * restringindo apenas para alunos membro
     * professores orientadores e coordernador
     */

    const memberResponsible = await Member.findByPk(req.userId);

    if (memberResponsible.office_id > 5 || memberResponsible.office_id === 4) {
      return res.status(401).json({ error: 'You not permission' });
    }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      objective: Yup.string().required(),
      abstract: Yup.string().required(),

      date_begin: Yup.date().required(),
      categories_id: Yup.array()
        .min(1)
        .of(
          Yup.number()
            .positive()
            .integer()
        )
        .required(),
      typesWork_id: Yup.array()
        .min(1)
        .of(
          Yup.number()
            .positive()
            .integer()
        )
        .required(),
      area_expertises_id: Yup.array()
        .min(1)
        .of(
          Yup.number()
            .positive()
            .integer()
        )
        .required(),

      members_id: Yup.array()
        .min(1)
        .of(
          Yup.number()
            .positive()
            .integer()
        ),
      responsibility: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      title,
      objective,
      abstract,
      date_begin,
      categories_id,
      typesWork_id,
      area_expertises_id,
      members_id,
      responsibility,
    } = req.body;

    /**
     * Verificando se não existe categorias invalidos seleconados
     */
    // for (let i = 0; i < categories_id.length; i++) {
    //   const category = await CategoryWork.findByPk(categories_id[i]);

    //   if (!category) {
    //     return res.status(400).json({ error: 'Category selected invalid' });
    //   }
    // }

    const promisesCheckCategories = categories_id.map(async category_id => {
      const category = await CategoryWork.findByPk(category_id);
      if (!category) {
        return res.status(400).json({ error: 'Category selected invalid' });
      }
    });

    /**
     * Verificando se não existe tipos invalidos seleconados
     */
    // for (let i = 0; i < typesWork_id.length; i++) {
    //   const type = await TypeWork.findByPk(typesWork_id[i]);

    //   if (!type) {
    //     return res.status(400).json({ error: 'Type selected invalid' });
    //   }
    // }

    const promisesCheckTypes = typesWork_id.map(async typeWork_id => {
      const type = await TypeWork.findByPk(typeWork_id);
      if (!type) {
        return res.status(400).json({ error: 'Type selected invalid' });
      }
    });

    /**
     * Verificando se não existe area atuação invalidos seleconados
     */
    // for (let i = 0; i < area_expertises_id.length; i++) {
    //   const areaExpertisepe = await AreaExpertise.findByPk(
    //     area_expertises_id[i]
    //   );

    //   if (!areaExpertisepe) {
    //     return res
    //       .status(400)
    //       .json({ error: 'AreaExpertisepe selected invalid' });
    //   }
    // }

    const promisesCheckAreas = area_expertises_id.map(
      async areaExpertise_id => {
        const areaExpertisepe = await AreaExpertise.findByPk(areaExpertise_id);
        if (!areaExpertisepe) {
          return res
            .status(400)
            .json({ error: 'AreaExpertisepe selected invalid' });
        }
      }
    );

    /**
     * Verificando se não existe membros invalidos seleconados
     */
    // for (let i = 0; i < members_id.length; i++) {
    //   const member = await Member.findByPk(members_id[i]);

    //   if (!member) {
    //     return res.status(400).json({ error: 'Member selected invalid' });
    //   }
    // }

    const promisesCheckMembes = members_id.map(async member_id => {
      const member = await Member.findByPk(member_id);
      if (!member) {
        return res.status(400).json({ error: 'Member selected invalid' });
      }
    });

    const work = await Work.create({
      title,
      objective,
      abstract,
      date_begin,
    });

    // for (let i = 0; i < categories_id.length; i++) {
    //   const category = await CategoryWork.findByPk(categories_id[i]);

    //   await work.addCategory(category);
    // }

    const promisesAddCategories = categories_id.map(async category_id => {
      const category = await CategoryWork.findByPk(category_id);
      await work.addCategory(category);
    });

    // for (let i = 0; i < typesWork_id.length; i++) {
    //   const type = await TypeWork.findByPk(typesWork_id[i]);

    //   await work.addType(type);
    // }

    const promisesAddTypes = typesWork_id.map(async typeWork_id => {
      const type = await TypeWork.findByPk(typeWork_id);
      await work.addType(type);
    });

    // for (let i = 0; i < area_expertises_id.length; i++) {
    //   const areaExpertise = await AreaExpertise.findByPk(area_expertises_id[i]);

    //   await work.addAreaExpertise(areaExpertise);
    // }

    const promisesAddAreas = area_expertises_id.map(async areaExpertise_id => {
      const areaExpertise = await AreaExpertise.findByPk(areaExpertise_id);
      await work.addAreaExpertise(areaExpertise);
    });

    /**
     * Add membros no Trabalho
     */
    // for (let i = 0; i < members_id.length; i++) {
    //   await MemberWork.create({
    //     member_id: members_id[i],
    //     work_id: work.id,
    //     responsibility: false,
    //   });
    // }

    const promisesAddMembes = members_id.map(async member_id => {
      await MemberWork.create({
        member_id,
        work_id: work.id,
        responsibility: false,
      });
    });

    await Promise.all(
      promisesCheckCategories,
      promisesCheckTypes,
      promisesCheckAreas,
      promisesCheckMembes,
      promisesAddCategories,
      promisesAddTypes,
      promisesAddAreas,
      promisesAddMembes
    );

    /**
     * Add member responsavel no trabalho com bolsista ou não
     */
    if (responsibility) {
      await MemberWork.create({
        member_id: req.userId,
        work_id: work.id,
        responsibility,
      });
    } else {
      await MemberWork.create({
        member_id: req.userId,
        work_id: work.id,
        responsibility: false,
      });
    }

    return res.json({ work });
  }
}

export default new WorkController();
