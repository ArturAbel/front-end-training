const data = {
  fruits: ["Apple", "Banana", "Cherry"],
  vegetables: ["Carrot", "Broccoli", "Lettuce"],
  dairy: ["Milk", "Cheese", "Yogurt"],
};

const categories = document.querySelector("#categories");
const itemsElement = document.getElementById("items");

categories.addEventListener("click", function (e) {
  const target = e.target;
  const itemsObj = data[target.dataset.category];

  if (itemsObj) {
    itemsElement.textContent = "";
  }

  itemsObj.forEach((item) => {
    let element = document.createElement("p");
    element.classList.add("item");
    element.textContent = item;
    itemsElement.appendChild(element);
  });
});
