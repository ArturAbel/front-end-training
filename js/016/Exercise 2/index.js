


const userForm = document.getElementById('userForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.querySelector('[type="submit"]')
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

usernameError.textContent = 'Invalid Username';
emailError.textContent = 'Invalid Email Address';
passwordError.textContent = 'Invalid Password';

 username.classList.add('error');
 email.classList.add('error');
 password.classList.add('error');

usernameError.classList.add('error-message');
emailError.classList.add('error-message');
passwordError.classList.add('error-message');

submit.addEventListener('submit', function(e){
   e.preventDefault();
   let isValid = true;




});

function showError() {
   
}