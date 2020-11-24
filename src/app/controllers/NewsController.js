import * as Yup from 'yup';

import Picture from '../models/Picture';
import News from '../models/News';
import Member from '../models/Member';

class WorkController {
  async index(req, res) {
    const { limit = 3 } = req.query;

    const news = await News.findAll({
      include: [
        {
          model: Picture,
          as: 'pictures',
          attributes: ['name', 'path', 'src', 'source', 'width', 'height'],
        },
      ],
      limit,
      order: ['date_publications', 'DESC'],
    });

    return res.json(news);
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

    const news = await News.findByPk(idTreated, {
      include: [
        {
          model: Picture,
          as: 'pictures',
          attributes: ['name', 'path', 'src', 'source', 'width', 'height'],
        },
      ],
    });

    if (!news) {
      return res.status(404).json({ error: 'Not found news' });
    }

    return res.json(news);
  }

  async store(req, res) {
    /**
     * restringindo apenas para alunos membro
     * professores orientadores e coordernador
     */

    const memberResponsible = await Member.findByPk(req.userId);

    if (!memberResponsible) {
      return res.status(401).json({ error: 'You not permission' });
    }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string().required(),
      font: Yup.string(),
      source: Yup.string().url(),
      date_publications: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const news = await News.create(req.body);

    return res.json(news);
  }

  async update(req, res) {
    const { id } = req.params;

    const idTreated = id
      .split('')
      .filter(n => Number(n) || n === 0)
      .join('');

    if (!idTreated) {
      return res.status(401).json({ error: 'id invalided' });
    }

    const memberResponsible = await Member.findByPk(req.userId);

    if (!memberResponsible) {
      return res.status(401).json({ error: 'You not permission' });
    }

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string().required(),
      font: Yup.string(),
      source: Yup.string().url(),
      date_publications: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const news = await News.findByPk(idTreated);

    if (!news) {
      return res.status(404).json({ error: 'Not found news' });
    }

    await news.update(req.body);

    return res.json(news);
  }

  async delete(req, res) {
    const { id } = req.params;

    const idTreated = id
      .split('')
      .filter(n => Number(n) || n === 0)
      .join('');

    if (!idTreated) {
      return res.status(401).json({ error: 'id invalided' });
    }

    const memberResponsible = await Member.findByPk(req.userId);

    if (!memberResponsible) {
      return res.status(401).json({ error: 'You not permission' });
    }

    await News.destroy({ where: { idTreated } });

    return res.json({ ok: true });
  }
}

export default new WorkController();
