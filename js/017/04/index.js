const usersElement = document.getElementById("users");
const postsElement = document.getElementById("posts");

const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

const fetchUsers = fetch(usersURL).then((response) => response.json());
const fetchPosts = fetch(postsURL).then((response) => response.json());

Promise.all([fetchUsers, fetchPosts]).then(([users, posts]) => {
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    buildElement(userDiv, usersElement, user, createUserDiv);
  });

  posts.forEach((post) => {
    const postDiv = document.createElement("div");
    buildElement(postDiv, postsElement, post, createPostDiv);
  });
});

//  Build an element -> add class/structure/append
function buildElement(element, fatherElement, content, createFunction) {
  element.classList.add("item");
  element.innerHTML = createFunction(content);
  fatherElement.appendChild(element);
}

//User element structure
function createUserDiv(user) {
  return `<strong>${user.name}</strong><br>${user.email}`;
}

//Post element structure
function createPostDiv(post) {
  return `<h3>${post.title}</h3><br>${post.body}`;
}
