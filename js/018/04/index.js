const usersURL = "https://jsonplaceholder.typicode.com/users";

const usersDom = document.getElementById("users");
const loader = document.getElementById("loading-indicator");

const fetchUsers = async (url) => {
  loader.style.display = "block";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Fetching from ${url} failed`);
  }
  return response.json();
};

const displayUsers = async () => {
  const users = await fetchUsers(usersURL);
  try {
    users.forEach((user) => {
      structureUser(user);
    });
    removeLoader(loader);
  } catch (error) {
    console.error(`Fetching failed`, error);
    removeLoader(loader);
  }
};

const structureUser = (user) => {
  const userDom = document.createElement("div");
  userDom.classList.add("item");
  userDom.innerHTML = `<h2>${user.name}</h2><p>${user.email}</p>`;
  usersDom.appendChild(userDom);
};

const removeLoader = (dom) => (dom.style.display = "none");

displayUsers();
