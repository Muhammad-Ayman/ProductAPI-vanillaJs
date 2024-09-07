# Product Page with Vanilla JavaScript

This project is a product listing page built with vanilla JavaScript. It fetches product data from [Fake Store API](https://fakestoreapi.com/products/) and displays them in a product card layout. When the user clicks on a specific product, they are redirected to a product details page with more information about the selected product.

## Features

- Fetches and displays products from the Fake Store API.
- Each product is presented in a card layout.
- Clicking on a product redirects the user to a product details page.
- Product details page fetches and displays additional information about the product.

## How to Run

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Muhammad-Ayman/ProductAPI-vanillaJs.git

   ```

2. Open index.html in your browser:

3. Open the index.html file directly in your web browser.
   Navigate through the app:

   - The homepage displays a list of products.
   - Click on any product to view its details.

### JavaScript Code Explanation

- app.js: Fetches products from the Fake Store API and dynamically generates the HTML for the product cards.

  ```JS
  let getProducts = new Promise((success, failed) => {
  fetch("https://dummyjson.com/products?limit=10")
  .then((response) => response.json())
  .then((data) => {
  success(data["products"]);
  })
  .catch((error) => failed("Failed to fetch data"));
  });
  ```

- product.js: Fetches details for a specific product based on the product ID from the URL and displays them on the product details page.

```JS
let getProduct = new Promise((success, failed) => {
fetch(`https://dummyjson.com/products/${productId}`)
.then((response) => response.json())
.then((data) => {
console.log(data);
success(data);
})
.catch((error) => failed("Failed to fetch data"));
});
```

### API Used

- [Fake Store API](https://dummyjson.com/products): This is a free API for testing and prototyping e-commerce applications. It provides product information such as title, description, price, and images.
