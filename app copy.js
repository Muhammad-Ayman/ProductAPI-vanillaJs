let imgs = [];
let imglist = document.querySelector(".imgList");
let main = document.querySelector(".mainImg");
let mainImg = main.querySelector("img");
let imgElements = [];
let products = [];

let getProducts = new Promise((success, failed) => {
  fetch("https://dummyjson.com/products?limit=10")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      success(data["products"]);
    })
    .catch((error) => failed("Failed to fetch data"));
});

getProducts.then((data) => {
  data.map((product) => {
    imgs.push(product.thumbnail);
  });

  for (let img of imgs) {
    let imgElement = document.createElement("img");
    imgElement.src = img;
    imgElement.alt = "image";
    imgElement.classList.add("imgli");

    imgElement.onclick = () => {
      document.querySelector(".active").classList.remove("active");
      mainImg.src = imgElement.src;
      imgElement.classList.add("active");
    };

    imgElements.push(imgElement);
  }

  imgElements[0].classList.add("active");
  imglist.append(...imgElements);
});
