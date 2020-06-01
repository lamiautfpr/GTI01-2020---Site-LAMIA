import axios from 'axios';
import requestPageGit from '../../utils/requestPageGit';

class StatisticController {
  async index(req, res) {
    const urlBase = 'https://api.github.com/orgs/lamia-utfpr/repos';

    try {
      const { data } = await axios.get(urlBase);

      const countRepos = data.length;
      let countCommits = 0;
      const countBranches = 0;
      let countStars = 0;

      await data.map(async repo => {
        countStars += repo.stargazers_count;
        const repoCommits = await requestPageGit(`${repo.url}/commits`);
        countCommits = repoCommits + countCommits;
        console.log(`tam: ${countCommits}`);
      });

      return res.json(countCommits);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new StatisticController();
