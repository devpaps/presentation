export default async function loadApi() {
  const data = await (
    await fetch("https://api.github.com/users/devpaps/repos")
  ).json();
  return data;
}
