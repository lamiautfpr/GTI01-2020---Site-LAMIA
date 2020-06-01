import axios from 'axios';

async function requestPageGit(url, page = 0) {
  const apiCommits = await axios.get(`${url}?page=${page + 1}`);
  if (apiCommits.data.length !== 30) {
    return apiCommits.data.length + page * 30;
  }
  const qtdCommits = await requestPageGit(url, page + 1);
  return qtdCommits;
}

export default requestPageGit;
