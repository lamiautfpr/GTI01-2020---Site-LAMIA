import axios from 'axios';

async function requestPageGit(url, page = 0, pageLimit = 5) {
  const apiCommits = await axios.get(`${url}?page=${page + 1}`);
  if (apiCommits.data.length !== 30 || page >= pageLimit) {
    return apiCommits.data.length + page * 30;
  }
  const qtdCommits = await requestPageGit(url, page + 1, pageLimit);
  return qtdCommits;
}

async function getDataGit() {
  const urlBase = 'https://api.github.com/orgs/lamia-utfpr/repos';

  try {
    const { data } = await axios.get(urlBase);

    const countRepositories = data.length;
    let countCommits = 0;
    let countBranches = 0;
    let countStars = 0;

    const promiseGetData = data.map(async repo => {
      countStars += repo.stargazers_count;
      countCommits += await requestPageGit(
        `${repo.url}/commits`,
        100 / (2 * countRepositories) - 1
      );
      countBranches += await requestPageGit(
        `${repo.url}/branches`,
        100 / (2 * countRepositories) - 1
      );
    });

    await Promise.all(promiseGetData);

    const statistic = {
      countRepositories,
      countCommits,
      countBranches,
      countStars,
    };

    return statistic;
  } catch (error) {
    return new Error('Não foi possivel acessar a api');
  }
}

export default getDataGit;
