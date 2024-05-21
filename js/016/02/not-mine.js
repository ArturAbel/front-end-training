const regexPatterns = {
  email:
    /^[a-z0-9]+(?!.*(?:\+{2,}|\-{2,}|\.{2,}))(?:[\.+\-]{0,1}[a-z0-9])*@gmail\.com$/gim,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
};









class Validator {
  static showError(element, message) {
    const errorContainer = element.nextElementSibling;
    errorContainer.classList.add("error-message");
    errorContainer.textContent = message;
    element.classList.add("input-error");
  }

  static removeError(element) {
    const errorContainer = element.nextElementSibling;
    errorContainer.classList.remove("error-message");
    errorContainer.textContent = "";
    element.classList.remove("input-error");
  }

  static validateField(field) {
    let isValid = false;
    const value = field.value.trim();

    switch (field.id) {
      case "username":
        isValid = this.validateUsername(value, field);
        break;
      case "email":
        isValid = this.validateEmail(value, field);
        break;
      case "password":
        isValid = this.validatePassword(value, field);
        break;
      default:
        break;
    }
    return isValid;
  }

  static validateUsername(value, field) {
    if (!value.length) {
      this.showError(field, "Nickname can't be empty.");
      return false;
    }
    if (value.length < 3) {
      this.showError(field, "Nickname must be at least 3 characters long.");
      return false;
    }
    this.removeError(field);
    return true;
  }

  static validateEmail(value, field) {
    if (!value.length) {
      this.showError(field, "Email can't be empty.");
      return false;
    }
    if (!regexPatterns.email.test(value)) {
      this.showError(field, "Please enter a valid email.");
      return false;
    }
    this.removeError(field);
    return true;
  }

  static validatePassword(value, field) {
    if (!value.length) {
      this.showError(field, "Password can't be empty.");
      return false;
    }
    if (!regexPatterns.password.test(value)) {
      this.showError(
        field,
        "Password must be at least 8 characters long, containing lowercase, uppercase letters, numbers, and a special character."
      );
      return false;
    }
    this.removeError(field);
    return true;
  }
}








class FormHandler {
  constructor(form) {
    this.form = form;
    this.fields = Array.from(form.querySelectorAll("input"));
    this.attachEventListeners();
  }

  attachEventListeners() {
    this.form.addEventListener("input", (e) => {
      Validator.validateField(e.target);
    });

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        // Handle form submission
      }
    });
  }

  validateForm() {
    return this.fields.every((field) => Validator.validateField(field));
  }
}





document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  new FormHandler(form);
});
