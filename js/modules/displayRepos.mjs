import loadApi from "./repos.mjs";

export default async function getApi() {
  const repos = await loadApi();
  return displayRepos(repos);
}

export function displayRepos(repos) {
  const reposElement = document.getElementById('repos');

  const displayText = `
    ${repos.map(repo => `
      <div class="repo border">
        <h1 class="title is-3 is-capitalized">${repo.name}</h1>
        <h2 class="is-capitalized">${repo.description  ? repo.description : `Ingen beskrivning tillgänglig`}</h2>
        <a href="${repo.html_url}">Kolla repot</a>
      </div>
    `).join('')}
  `;

 /*  <h3>${repos.map(repo => repo.description)}</h3>
      <p>${repos.map(repo => repo.html_url)}</p> */

  reposElement.insertAdjacentHTML('afterbegin', displayText);


}

document.addEventListener('DOMContentLoaded', getApi);


