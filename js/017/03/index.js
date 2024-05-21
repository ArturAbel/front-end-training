const usersElement = document.getElementById("users");
const errorElement = document.getElementById("error");
const usersURL = "https://jsonplaceholder.typicode.com/users";

fetch(usersURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fetching failed");
    }
    return response.json();
  })

  .then((users) => {
    users.forEach((user) => {
      const userElement = document.createElement("div");
      userElement.classList.add("user");
      userElement.innerHTML = `<h2>${user.name}</h2>
       <p><strong>Email: </strong>${user.email}</p>`;
      usersElement.appendChild(userElement);
    });
  })
  .catch((error) => {
    errorElement.style.display = 'block';
    errorElement.innerHTML = `${error}. Please try again later.`;
  });
