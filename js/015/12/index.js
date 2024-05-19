const characters = document.querySelectorAll(".character");
const positions = [0, 1, 2];



updateCarousel();


function updateCarousel() {
  characters.forEach((character, index) => {

    const currentPosition = positions[index];
    const translateX = (currentPosition - 1) * 180;

    const scale = currentPosition === 1 ? 1.5 : 1;

    character.style.transform = `translateX(${translateX}px) scale(${scale})`;

    character.classList.toggle("character-center", currentPosition === 1);

  });
}

characters.forEach((character, index) => {
  character.addEventListener("click", function () {
    if (positions[index] === 1) {
      return;
    }
    positions.push(positions.shift());
    updateCarousel();
  });
});

