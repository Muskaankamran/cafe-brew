const products = {
  coffee: {
    espresso: [
      { name: "Single Espresso", price: 250, img: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
      { name: "Double Espresso", price: 350, img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814" }
    ],
    latte: [
      { name: "Vanilla Latte", price: 400, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" }
    ]
  },

  snacks: {
    burger: [
      { name: "Chicken Burger", price: 550, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" }
    ],
    sandwich: [
      { name: "Club Sandwich", price: 400, img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847" }
    ]
  },

  desserts: {
    cake: [
      { name: "Chocolate Cake", price: 700, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" }
    ],
    donut: [
      { name: "Chocolate Donut", price: 200, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff" }
    ]
  }
};

// SHOW ALL
function showAll() {
  let box = document.getElementById("productContainer");
  box.innerHTML = "";

  for (let cat in products) {
    for (let sub in products[cat]) {
      products[cat][sub].forEach(item => {
        box.innerHTML += card(item);
      });
    }
  }
}

// FILTER
function filter(sub) {
  let box = document.getElementById("productContainer");
  box.innerHTML = "";

  for (let cat in products) {
    if (products[cat][sub]) {
      products[cat][sub].forEach(item => {
        box.innerHTML += card(item);
      });
    }
  }
}

// CARD UI
function card(item) {
  return `
  <div class="col-md-4 mb-3">
    <div class="card cafe-card">

      <div class="img-wrapper position-relative">
        <img src="${item.img}">
        <span class="price">Rs ${item.price}</span>
      </div>

      <div class="card-body">
        <h5>${item.name}</h5>
        <button class="btn btn-cafe w-100 mt-2">Add to Cart</button>
      </div>

    </div>
  </div>
  `;
}

// SIDEBAR TOGGLE
function toggle(id) {
  let menu = document.getElementById(id);
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// INIT
showAll();