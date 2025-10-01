let cart = [];
let products = [
  { id: 1, name: "Product A", price: 10, stock: 5 },
  { id: 2, name: "Product B", price: 15, stock: 3 }
];

function addToCart(id) {
  let product = products.find(p => p.id === id);

  if (product.stock > 0) {
    cart.push({ id: product.id, name: product.name, price: product.price });
    product.stock--;

    updateCart();
    updateStock(id);
  } else {
    alert("Out of stock!");
  }
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });
}

function updateStock(id) {
  let product = products.find(p => p.id === id);
  let stockElement = document.querySelector(`.product[data-id="${id}"] .stock`);
  stockElement.textContent = product.stock;
}

function clearCart() {
  // restore stock
  cart.forEach(item => {
    let product = products.find(p => p.id === item.id);
    product.stock++;
    updateStock(item.id);
  });

  cart = [];
  updateCart();
}
