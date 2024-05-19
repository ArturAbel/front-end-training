const cart = [];

function addProductToCart(productId) {
  return function () {
    cart.find((item) => {
      if (item.id === productId) {
        item.quantity++;
        return;
      }
      cart.push(item);
      return;
    });
  };
}

function updateCart() {
  const cartItems = document.querySelector(".cart-items");
  cartItems.textContent = "";
  for (const [productId, quantity] of Object.entries(cart)) {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.textContent = `Id: ${productId}, Quantity: ${quantity}`;
    cartItems.appendChild(cartItemDiv);
  }
}

const products = document.querySelectorAll('.product');

products.forEach(product => {
   const btn = product.querySelector('button');
   const productId = product.getAttribute('data-id');
   btn.addEventListener('click', function() {
      addProductToCart(productId);
   });
});
