export default async function loadApi() {
  // Get github API
  const getApi = await fetch('https://api.github.com/users/devpaps/repos');
  const data = await getApi.json();
  return data;
}