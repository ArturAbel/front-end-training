//1 Initial Variable Declarations
const form = document.getElementById("form");
const hidCode = document.getElementById("hid-code");
const visCode = document.getElementById("vis-code");
const numList = document.querySelectorAll('input[type="text"]');
const numArray = Array.from(numList).slice(1);

//Generate alpha numeric string
const sms = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let string = "";
  for (let i = 0; i < 6; i++) {
    string += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return string;
};

//2 Initial Setup
visCode.value = sms();
numArray[0].focus();

//3 fillCode
function fillCode(el) {
  const combineString = numArray.reduce((acc, input) => {
    if (input.type === "char") {
      if (/^[a-zA-Z0-9]$/.test(input.value)) {
        return acc + input.value;
      } else {
        input.value = "";
        return acc;
      }
      //Unfinished focus condition
    }
  }, "");

  return combineString.toLowerCase();
}

hidCode.value = fillCode();

//4 fillFromClipboard(event)
function fillFromClipboard(event) {
  event.preventDefault();
  const paste = event.clipboardData || window.clipboardData;

  if (paste.length < 6 || !/^[a-zA-Z0-9]$/.test(paste)) {
    return false;
  } else {
    for (let i = 0; i < paste.length; i++) {
      numList[index].value = paste[i]; // Need to check
    }
  }
}

//5 checkAndSubmit()
function checkAndSubmit() {
  if (hidCode.value !== visCode.value) {
    return false;
  } else {
    form.submit();
  }
}
