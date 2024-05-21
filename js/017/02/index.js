const usersElement = document.getElementById("users");
const baseURL = "https://jsonplaceholder.typicode.com";
const usersURL = `${baseURL}/users`;

fetch(usersURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fetching failed");
    }
    return response.json();
  })

  .then((users) => {
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = createUserElement(user);
      usersElement.appendChild(userDiv);

      fetch(`${baseURL}/posts?userId=${user.id}`)
        .then((response) => response.json())
        .then((posts) => {
          const postsElement = userDiv.querySelector(".posts");
          postsElement.innerHTML = `<h3>Posts:</h3>`;

          posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = createPost(post);
            postsElement.appendChild(postDiv);
          });
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((error) => console.error(error));


// Create a user element
function createUserElement(user) {
  return `<h2>${user.name}</h2>
   <p><strong>Email:</strong> ${user.email}</p>
   <div class="posts"></div>
   `;
}


// Create a post element
function createPost(post) {
  return `<strong>${post.title}</strong>
   <br>${post.body}`;
}
