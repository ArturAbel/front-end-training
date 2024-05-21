const formElement = document.getElementById("form");
const nicknameElement = document.getElementById("nickname");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

formElement.addEventListener("submit", function (e) {
  e.preventDefault();

  alert(
    `Nickname: ${nicknameElement.value}\nEmail: ${emailElement.value}\nPassword: ${passwordElement.value}`
  );
});
