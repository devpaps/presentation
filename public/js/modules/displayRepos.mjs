import loadApi from "./repos.mjs";

export default async function getApi() {
  const repos = await loadApi();
  return displayRepos(repos);
}

export function displayRepos(repos) {
  const reposElement = document.getElementById("repos");

  const displayText = `
    ${repos
      .map(
        (repo) => `
      <a href="${repo.html_url}">
        <div class="repo border">
          <h1 class="title is-4 is-capitalized">${repo.name}</h1>
          <p class="is-capitalized">${
            repo.description
              ? repo.description
              : `Ingen beskrivning tillgänglig`
          }</p>
          </div>
        </a>
    `
      )
      .join("")}
  `;

  reposElement.insertAdjacentHTML("afterbegin", displayText);
}

document.addEventListener("DOMContentLoaded", getApi);
