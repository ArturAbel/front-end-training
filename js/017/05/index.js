const indicator = document.getElementById("loading-indicator");
const usersElement = document.getElementById("users");
const usersURL = "https://jsonplaceholder.typicode.com/users";

indicator.style.display = "block";

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
      userDiv.classList.add("item");
      userDiv.innerHTML = `<p><strong>${user.name}</strong></p><p>${user.email}</p>`;
      usersElement.appendChild(userDiv);
    });
    indicator.style.display = "none";
  })

.catch((error) => console.error(error));