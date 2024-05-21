//-------------------------------------//
//--------------Regex------------------//
//-------------------------------------//



const emailRegex =
  /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gim;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;



//-------------------------------------//
//--------------Elements---------------//
//-------------------------------------//



const form = document.getElementById("userForm");
const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const submitElement = document.querySelector('[type="submit"]');



//-------------------------------------//
//----------Error Handling-------------//
//-------------------------------------//



function showError(error, element) {
  const errorContainer = element.nextElementSibling;
  errorContainer.classList.add("error-message");
  errorContainer.textContent = error;
  element.classList.add("input.error");
}

function removeError(element) {
  const errorContainer = element.nextElementSibling;
  errorContainer.classList.remove("error-message");
  errorContainer.textContent = "";
  element.classList.remove("input.error");
}



//-------------------------------------//
//----------Check Inputs---------------//
//-------------------------------------//



function checkUsername() {
  let isValid = false;
  const user = usernameElement.value.trim();

  if (!user.length) {
    showError("Nickname can't be empty.", usernameElement);
  } else if (user.length < 3) {
    showError("Nickname must be at least 3 characters long.", usernameElement);
  } else {
    removeError(usernameElement);
    isValid = true;
  }
  return isValid;
}

function checkEmail() {
  let isValid = false;
  const email = emailElement.value.trim();

  if (!email.length) {
    showError("Email can't be empty.", emailElement);
  } else if (!emailRegex.test(email)) {
    showError("Please enter a valid email.", emailElement);
  } else {
    removeError(emailElement);
    isValid = true;
  }
  return isValid;
}

function checkPassword() {
  let isValid = false;
  const password = passwordElement.value.trim();

  if (!password.length) {
    showError("Password can't be empty.", passwordElement);
  } else if (!passwordRegex.test(password)) {
    showError(
      "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character.",
      passwordElement
    );
  } else {
    removeError(passwordElement);
    isValid = true;
  }
  return isValid;
}



//-------------------------------------//
//----------Event Listeners------------//
//-------------------------------------//



form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "username":
      checkUsername();
      break;

    case "email":
      checkEmail();
      break;

    case "password":
      checkPassword();
      break;
  }
});

submitElement.addEventListener("submit", function (e) {
  e.preventDefault();

  let isUserValid = checkUsername();
  let isEmailValid = checkEmail();
  let isPassValid = checkPassword();

  if (isUserValid && isEmailValid && isPassValid) {
  }
});
