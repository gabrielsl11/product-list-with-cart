var desserts = [
  {
    id: 1,
    image: "assets/images/image-waffle-thumbnail.jpg",
    subtitle: "Waffle",
    title: "Waffle with Berries",
    price: 6.5,
  },
  {
    id: 2,
    image: "assets/images/image-creme-brulee-thumbnail.jpg",
    subtitle: "Crème Brúlée",
    title: "Vanilla Bean Crème Brûlée",
    price: 7,
  },
  {
    id: 3,
    image: "assets/images/image-macaron-thumbnail.jpg",
    subtitle: "Macaron",
    title: "Macaron Mix of Five",
    price: 8,
  },
  {
    id: 4,
    image: "assets/images/image-tiramisu-thumbnail.jpg",
    subtitle: "Tiramisu",
    title: "Classic Tiramisu",
    price: 5.5,
  },
  {
    id: 5,
    image: "assets/images/image-baklava-thumbnail.jpg",
    subtitle: "Baklava",
    title: "Pistachio Baklava",
    price: 4,
  },
  {
    id: 6,
    image: "assets/images/image-meringue-thumbnail.jpg",
    subtitle: "Pie",
    title: "Lemon Meringue Pie",
    price: 6,
  },
  {
    id: 7,
    image: "assets/images/image-cake-thumbnail.jpg",
    subtitle: "Cake",
    title: "Red Valvet Cake",
    price: 4.5,
  },
  {
    id: 8,
    image: "assets/images/image-brownie-thumbnail.jpg",
    subtitle: "Brownie",
    title: "Salted Caramel Brownie",
    price: 4.5,
  },
  {
    id: 9,
    image: "assets/images/image-panna-cotta-thumbnail.jpg",
    subtitle: "Panna Cotta",
    title: "Vanilla Panna Cotta",
    price: 6.5,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let grid = document.querySelector(".grid");

  for (let i = 0; i < Math.min(desserts.length, 9); i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    gridItem.innerHTML = `
          <div class="img-item">
            <img src="${desserts[i].image}" alt="${desserts[i].title}" />
            
            <span id="${desserts[i].id}" class="select-item">
              <i class="bi bi-cart"></i>  
              Add to Cart
            </span>

            <span class="add-to-cart hidden">
              <i id="addOne" class="bi bi-dash-circle"></i>
              0
              <i id="removeOne" class="bi bi-plus-circle"></i>
            </span>
          </div>
          <div class="desc-item">
            <span>${desserts[i].subtitle}</span>
            <h5>${desserts[i].title}</h5>
            <p>$${desserts[i].price}</p>
          </div>
    `;

    grid.appendChild(gridItem);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".select-item").forEach((item) => {
    item.addEventListener("click", (event) => {

      const clickedItem = event.target;

      clickedItem.classList.add("hidden");

      const addToCart = clickedItem.nextElementSibling;

      if (addToCart) {
        addToCart.classList.remove("hidden");
      }
    });
  });
});
