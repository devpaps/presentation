"use strict";
//99f2b126ba9460e5d5def8e07884f3ad15956186 Personal access token github


// Gjort en IIFE för att inte mina variabler ska var åtkomliga från andra script filer
const run = () =>
  (() => {
    async function getGithubApi() {
      const apiUrl = fetch(`https://api.github.com/users/devpaps`);
      const apiRepos = fetch(`https://api.github.com/users/devpaps/repos`);
      await Promise.all([apiUrl, apiRepos])
      .then(values => {
         return Promise.all(values.map(item => item.json()))
      })
      .then(([mainGit, repos]) => {
        console.log(mainGit, repos);
        displayNodes(mainGit, repos);
      }).catch(err => {
        console.log(err);
      })


      function displayNodes(mainGit, repos) {
       const writeNodes = `
       <h1 class="mb-6 subtitle is-6 has-text-white">Mina publika repos ${mainGit.public_repos} st.</h1>
       <div class="github-repos">
       ${repos.map(repo => `
       <h1 class="title is-3">${repo.name}</h1>
       <h2 class="subtitle is-4">${repo.description ? repo.description : 'Ingen beskrivning'}</h2>
       `).join('')}
       </div>
     `;
     const getGithubNode = document.getElementById('github');
     getGithubNode.insertAdjacentHTML('afterbegin', writeNodes);
      }

    }

    function errorHandler(err) {
      console.error(err);
      let response = new Response(
        JSON.stringify({
          code: 400,
          message: "Kan inte ansluta",
        })
      );
      return response;
    }

    getGithubApi();
  })();

window.onload = run;
