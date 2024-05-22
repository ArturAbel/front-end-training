const nextElement = document.getElementById("next");
const prevElement = document.getElementById("prev");
const carouselElement = document.querySelector(".carousel");
const listItems = document.querySelector(".carousel .list");
const thumbnails = document.querySelector(".thumbnail");
const thumbnailItems = thumbnails.querySelectorAll('.item');

// Fix first thumbnail issue
thumbnails.appendChild(thumbnailItems[0]);


nextElement.onclick = function () {
  showSlider("next");
};

prevElement.onclick = function () {
  showSlider("prev");
};

let timeRunning = 2000;
let runTimeOut;

function showSlider(btn) {
   
  const itemThumbnail = document.querySelectorAll(".thumbnail .item");
  const sliderItems = document.querySelectorAll(".carousel .list .item");
  
  if (btn === "next") {
    listItems.appendChild(sliderItems[0]);
    thumbnails.appendChild(itemThumbnail[0]);
    carouselElement.classList.add("next");
  } else {
    let lastPosition = sliderItems.length - 1;
    listItems.prepend(sliderItems[lastPosition]);
    thumbnails.prepend(itemThumbnail[lastPosition]);
    carouselElement.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselElement.classList.remove("next");
    carouselElement.classList.remove("prev");
  }, timeRunning);
}
