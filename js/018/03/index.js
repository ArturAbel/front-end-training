const usersURL = "https://jsonplaceholder.typicode.com/users";
const postsURL = "https://jsonplaceholder.typicode.com/posts";

const usersDom = document.getElementById("users");
const postsDom = document.getElementById("posts");

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Fetching from ${url} failed`);
  }
  return response.json();
};



const fetchUsers = async () => fetchData(usersURL);
const fetchPosts = async () => fetchData(postsURL);

const displayData = async () => {
  const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
  try {
    users.forEach((user) => {
      const userDom = document.createElement("div");
      createElement(userDom, usersDom, user, userStructure);
    });
    posts.forEach((post) => {
      const postDom = document.createElement("div");
      createElement(postDom, postsDom, post, postStructure);
    });
  } catch (error) {
    console.error(`Error fetching data ${error}`);
  }
};



function createElement(childDom, fatherDom, data, structure) {
  childDom.classList.add("item");
  childDom.innerHTML = structure(data);
  fatherDom.appendChild(childDom);
}

const userStructure = (data) => `<strong>${data.name}</strong><br>${data.email}`;
const  postStructure = (data) => `<h3>${data.title}</h3><br>${data.body}`;


displayData();
