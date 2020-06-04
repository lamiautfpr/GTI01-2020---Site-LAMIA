import { Op } from 'sequelize';
import { startOfDay, endOfDay } from 'date-fns';
import getDataGit from '../../utils/getDataGit';
import Statistic from '../models/Statistic';

class StatisticController {
  async index(req, res) {
    const today = new Date();

    const statistic = await Statistic.findOne({
      where: {
        created_at: {
          [Op.between]: [startOfDay(today), endOfDay(today)],
        },
      },
      attributes: [
        'countRepositories',
        'countCommits',
        'countBranches',
        'countStars',
      ],
    });

    if (!statistic) {
      try {
        const data = await getDataGit();
        console.log(data);

        const newStatistic = await Statistic.create({
          countRepositories: data.countRepositories,
          countCommits: data.countCommits,
          countBranches: data.countBranches,
          countStars: data.countStars,
        });

        return res.json(newStatistic);
      } catch (error) {
        return res.json(error);
      }
    }
    return res.json(statistic);
  }

  async store(req, res) {
    try {
      const data = getDataGit();

      const statistic = await Statistic.create({ data });

      return res.json(statistic);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new StatisticController();
