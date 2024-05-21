const TIME = 1000;
const triggerPromise = document.getElementById("triggerPromise");
const triggerRejection = document.getElementById("triggerRejection");
const messageElement = document.getElementById("message");
let data = null;

triggerPromise.addEventListener("click", function () {
  data = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (triggerRejection.checked === false) {
        resolve("The promise has been resolved");
      } else {
        reject("The promise has been rejected");
      }
    }, TIME);
  });

  data.then((message) => {
      messageElement.textContent = message;
      messageElement.classList.add("resolved");
    })
    .catch((message) => {
      messageElement.textContent = message;
      messageElement.classList.add("rejected");
    });
});