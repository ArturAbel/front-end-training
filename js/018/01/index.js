const url = "https://jsonplaceholder.typicode.com";

const usersDom = document.getElementById("users");

// General fetch
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch from ${url}`);
  }
  return response.json();
};

//Fetch users
const fetchUsers = async () => {
  return fetchData(`${url}/users`);
};

//Fetch posts
const fetchPosts = async (userId) => {
  return fetchData(`${url}/posts?userId=${userId}`);
};

const displayUserAndPosts = async () => {
  try {
    const users = await fetchUsers();
    for (const user of users) {
      addUser(user);

      try {
        const posts = await fetchPosts(user.id);
        for (const post of posts) {
          addPosts(post);
        }
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

function addUser(user) {
  const userDom = document.createElement("div");
  userDom.classList.add("user");
  userDom.innerHTML = `<h2>${user.name}</h2> <p>${user.email}</p>`;
  usersDom.appendChild(userDom);
}

function addPosts(post) {
  const postDom = document.createElement("div");
  postDom.classList.add("post");
  postDom.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
  usersDom.appendChild(postDom);
}

// Calling the function expression
displayUserAndPosts();
