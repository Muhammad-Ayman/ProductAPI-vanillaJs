let products = [];
let cards = document.querySelector(".cards");

function redirectToDetails(productId) {
  window.location.href = `product.html?id=${productId}`;
}

let getProducts = new Promise((success, failed) => {
  fetch("https://dummyjson.com/products?limit=10")
    .then((response) => response.json())
    .then((data) => {
      success(data["products"]);
    })
    .catch((error) => failed("Failed to fetch data"));
});

getProducts.then((data) => {
  products = data;
  for (let product of products) {
    cards.innerHTML += `
      <div class="card" onclick="redirectToDetails(${product.id})">
        <img src="${product.thumbnail}" alt="product" />
        <h3>${product.title}</h3>
        <p>${product.price}</p>
      </div>`;
  }
});
