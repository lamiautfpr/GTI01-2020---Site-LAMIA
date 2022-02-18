import Work from '../models/Work';
import Picture from '../models/Picture';
// import AreaExpertise from '../models/AreaExpertise';

class LastWorkController {
  async index(req, res) {
    const { limit = 3 } = req.query;

    const lastWork = await Work.findAll({
      attributes: ['id', 'title', 'objective', 'date_begin'],
      include: [
        {
          model: Picture,
          as: 'pictures',
          attributes: ['id', 'name', 'path', 'src', 'source'],
          through: { attributes: [] },
        },
      ],
      order: [['date_begin', 'DESC']],
      limit,
    });

    // const lastWork = work.splice(0, 3);

    return res.json(lastWork);
  }
}

export default new LastWorkController();
