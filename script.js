const products = {
  coffee: {
    espresso: [
      { name: "Single Espresso", price: 250, img: "https://thumbs.dreamstime.com/b/exquisito-espresso-en-una-taza-blanca-vista-cenital-de-la-perfecci%C3%B3n-arom%C3%A1tica-del-caf%C3%A9-355967145.jpg?w=992" },
      { name: "Double Espresso", price: 350, img: "https://www.shutterstock.com/image-photo/closeup-detail-view-two-espresso-260nw-2597297125.jpg" },
      { name: "Caramel Espresso", price: 450, img: "https://t3.ftcdn.net/jpg/01/31/06/30/360_F_131063001_CZpK2USJpVef4pqiCiIwpv6i4gocIgEK.jpg" },
      { name: "Iced Espresso", price: 300, img: "https://www.shutterstock.com/image-photo/refreshing-iced-coffee-bold-espresso-260nw-2635618401.jpg" }
    ],
    latte: [
      { name: "Vanilla Latte", price: 400, img: "https://png.pngtree.com/thumb_back/fh260/background/20250423/pngtree-a-close-up-image-of-creamy-iced-vanilla-chai-latte-topped-image_17215217.jpg" },
      { name: "Caramel Latte", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKH34KT7ZepmXXBroKpRkadF9aU0iz0QWUQ&s" },
      { name: "Hazelnut Latte", price: 480, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q1WF5xPVa-ve4pm0VLm9zawGPoKpGppCsg&s" },
      { name: "Mocha Latte", price: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nCYev6b0PW9DleVNnXhPfJq0DbhLtWrNJQ&s" }
    ],
    frappe: [
      { name: "Chocolate Frappe", price: 550, img: "https://t3.ftcdn.net/jpg/05/14/49/48/360_F_514494803_JVTzwZZAdbiKOF9AAegiPQNclu8mlfJI.jpg" },
      { name: "Caramel Frappe", price: 580, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3Wuf6FSJOU3jrTvmWP_f25wmAP-7MERnhw&s" },
      { name: "Oreo Frappe", price: 600, img: "https://allyouneedisbrunch.com/wp-content/uploads/2023/05/oreo-frappuccino-5-2.jpg" },
      { name: "Vanilla Frappe", price: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1svDTZgqyJlLdwb_pSegjM37u58ae4BuxWA&s" }
    ]
  },
  snacks: {
    burger: [
      { name: "Chicken Burger", price: 550, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC03rkUa2tSh2vKRzNqtAkGDwabn-IgVaLkQ&s" },
      { name: "Zinger Burger", price: 650, img: "https://www.eatingonadime.com/wp-content/uploads/2024/03/200KB-Zinger-Burger-8.jpg" },
      { name: "Beef Burger", price: 700, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLwWeHl79Ty78n_NH3raiIk2xJ2uwCnWPBA&s" },
      { name: "Cheese Burger", price: 600, img: "https://www.simplyrecipes.com/thmb/rY00fvQ-6epxn-BBP_viPgrTwFg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Stovetop-Cheeseburgers-hero1v2-2cb2337eb6724b9ea27d849bafb137d2.jpg" },
      { name: "Smash Burger", price: 600, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaY39L-zGIcxX0uDcEbQmBqNkx5zDmfcolA&s" }
    ],
    sandwich: [
      { name: "Club Sandwich", price: 400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYXIGAjpRW121MWA_ugNQc3zsckceBH5kkw&s" },
      { name: "Chicken Sandwich", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6te-hLWS36Vu_I7pJRmtaeyPo6oFFKVP_g&s" },
      { name: "Grilled Sandwich", price: 500, img: "https://www.framedcooks.com/wp-content/uploads/2015/03/Irish-grilled-cheese-sandwich-on-a-plate.jpg" },
      { name: "Cheese Sandwich", price: 420, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO2aaAk6pHpiAJgls_AFNy17uaerZVfVpnqg&s" }
    ],
    frenchfries: [
      { name: "Loaded Fries", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZiYoZj6HgSd9sKZBOm_bEtlY_7cJY8drZqw&s" },
      { name: "Cheese Fries", price: 500, img: "https://www.acouplecooks.com/wp-content/uploads/2022/06/Cheese-Fries-005.jpg" },
      { name: "Peri Peri Fries", price: 480, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHOJunIHWhkoAV0D72JYReFLdWvbG0fO0yw&s" },
      { name: "Curly Fries", price: 550, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzTlCZtCiBSboG3DBesbyyM_oQVW6Z0QX7A&s" }
    ],
    fish: [
      { name: "Fish Fillet", price: 750, img: "https://images.yummy.ph/yummy/uploads/2017/03/buttermilkfishfilletcreamdoryrecipe.jpg" },
      { name: "Grilled Fish", price: 850, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUVLRFdLsrTk08haTa948Q32AtfNC39Jt6g&s" },
      { name: "Fried Fish", price: 800, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWU5yPAvLFUIA7epRiKUF1EMgAKJEzy3XkDA&s" },
      { name: "Lemon Fish", price: 900, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPgUPK-4NpMmIAnXCq2BvjYW5MFPamxyO6Q&s" }
    ],
    wings: [
      { name: "Spicy Wings", price: 650, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNQRQ253QfOAq23trAySqENimlGLrqFyjaw&s" },
      { name: "BBQ Wings", price: 700, img: "https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=612x612&w=0&k=20&c=SH8ZCkEKuWD_wxulpntIJ0uD4yRnUf9UXovQwSwrmmA=" },
      { name: "Honey Garlic Wings", price: 750, img: "https://recipeteacher.com/wp-content/uploads/2024/06/Best-Damn-Air-Fryer-Honey-Garlic-Wings-8.jpg" },
      { name: "Crispy Wings", price: 720, img: "https://media.istockphoto.com/id/583848484/photo/spicy-deep-fried-breaded-chicken-wings.jpg?s=612x612&w=0&k=20&c=N9JOYnsCFDQt8uFiWTzlEdefHn4NNhfI3JPN0vGwUas=" }
    ],
    hummus: [
      { name: "Classic Hummus", price: 350, img: "https://img.freepik.com/free-photo/chickpea-hummus-rustic-wooden-table_123827-22472.jpg" },
      { name: "Spicy Hummus", price: 400, img: "https://afoodcentriclife.com/wp-content/uploads/2013/08/red-pepper-hummus-square-crop-0760-500x500.jpg" },
      { name: "Garlic Hummus", price: 420, img: "https://media.istockphoto.com/id/1348719608/photo/roasted-garlic-hummus-topped-with-olive-oil.jpg?s=612x612&w=0&k=20&c=CpqRZZIaXcE9yn_PD_o0vmD9GUwfQMGzxebd3hmAugA=" },
      { name: "Roasted Pepper Hummus", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiY3-aAwggfwWFRCnRRvU_AsNNrHyRMsDXxw&s" }
    ]
  },
  desserts: {
    brownie: [
      { name: "Chocolate Brownie", price: 350, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
      { name: "Walnut Brownie", price: 400, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G603--U4Z6CKavcmI4gNrxIPmC5mzvoNuQ&s" },
      { name: "Fudge Brownie", price: 450, img: "https://i0.wp.com/thecreativecottage.net/wp-content/uploads/2015/03/brownie-dessert-cake-sweet-45202.jpeg?fit=1024%2C682&ssl=1" },
      { name: "Caramel Brownie", price: 480, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETZasg9gKVJLMyo9OlGjFAI-Tx_7Xy-ZX-Q&s" }
    ],
    cupcake: [
      { name: "Vanilla Cupcake", price: 250, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYd5lMs87BqkKgIuq9Jh9EEqqkt_5mhAJqg&s" },
      { name: "Chocolate Cupcake", price: 280, img: "https://siftwithkima.com/wp-content/uploads/2025/01/vanilla-cupcakes-with-chocolate-frosting-feature-2.jpg" },
      { name: "Red Velvet Cupcake", price: 300, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzSC_cTyPYsTqYRO_HcnQztW0Mmt8O8ci1Q&s" },
      { name: "Strawberry Cupcake", price: 320, img: "https://www.sugarandsoul.co/wp-content/uploads/2022/05/strawberry-shortcake-cupcakes-5-500x500.jpg" }
    ],
    pancakes: [
      { name: "Classic Pancakes", price: 500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGWzfaj8IocANxoHBXw6BLBkQD1DuBS5eZg&s" },
      { name: "Chocolate Pancakes", price: 600, img: "https://simshomekitchen.com/wp-content/uploads/2018/12/Wholemeal-chocolate-pancakes-on-a-white-plate-with-chocolate-sauce.jpg" },
      { name: "Nutella Pancakes", price: 650, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6X0K4knMgA0KDMqDglegOMaKsZoJ0PcP1g&s" },
      { name: "Honey Pancakes", price: 550, img: "https://brokenovenbaking.com/wp-content/uploads/2023/01/cinnamon-honey-pancakes-8-1.jpg" }
    ],
    waffles: [
      { name: "Belgian Waffles", price: 650, img: "https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Belgian-Waffles26-Thumbnail-1-scaled.jpg" },
      { name: "Nutella Waffles", price: 750, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3UOiL5O1hfcsnozQ4EOcELuhz8F24o0XWA&s" },
      { name: "Chocolate Waffles", price: 700, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkaytnLj72OSKbPEJ9rjSKlTR6cOdpClH0Nw&s" },
      { name: "Strawberry Waffles", price: 720, img: "https://www.californiastrawberries.com/wp-content/uploads/2021/05/strawberry-waffles.jpg" }
    ]
  }
};

const categoryLabels = {
  espresso: "Espresso", latte: "Latte", frappe: "Frappe",
  burger: "Burger", sandwich: "Sandwich", frenchfries: "French Fries",
  fish: "Fish", wings: "Wings", hummus: "Hummus",
  brownie: "Brownie", cupcake: "Cupcake", pancakes: "Pancakes", waffles: "Waffles"
};

let cart = [];

/* ---------- rendering ---------- */

function card(item, subCategory) {
  const label = categoryLabels[subCategory] || subCategory;
  const safeName = item.name.replace(/'/g, "\\'");
  return `
    <div class="col-md-6 col-xl-4 mb-3">
      <div class="cafe-card">
        <div class="img-wrapper">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          <span class="price">Rs ${item.price}</span>
        </div>
        <div class="card-body">
          <span class="card-eyebrow">${label}</span>
          <h5>${item.name}</h5>
          <button class="btn-cafe" onclick="addToCart('${safeName}', ${item.price})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderItems(items, title) {
  const box = document.getElementById("productContainer");
  document.getElementById("sectionTitle").textContent = title;

  if (!items.length) {
    box.innerHTML = `<div class="empty-state">Nothing here yet — check back soon.</div>`;
    return;
  }
  box.innerHTML = items.map(([item, sub]) => card(item, sub)).join("");
}

function showAll(btn) {
  const collected = [];
  for (const category in products) {
    for (const subCategory in products[category]) {
      products[category][subCategory].forEach(item => collected.push([item, subCategory]));
    }
  }
  renderItems(collected, "All Items");
  setActiveSidebar(btn);
}

function filter(subCategory, el) {
  const collected = [];
  for (const category in products) {
    if (products[category][subCategory]) {
      products[category][subCategory].forEach(item => collected.push([item, subCategory]));
    }
  }
  renderItems(collected, categoryLabels[subCategory] || subCategory);
  setActiveSidebar(el);
}

function setActiveSidebar(el) {
  document.querySelectorAll(".sub-menu p.active, .all-items-btn.active")
    .forEach(node => node.classList.remove("active"));
  if (el) el.classList.add("active");
}

/* ---------- sidebar accordion ---------- */

function toggleCategory(btn) {
  const category = btn.closest(".category");
  category.classList.toggle("open");
}

/* ---------- dark mode ---------- */

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("cafe-brew-theme", theme);
}

function toggleMode() {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}

(function initTheme() {
  const saved = localStorage.getItem("cafe-brew-theme");
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    applyTheme("dark");
  }
})();

/* ---------- cart + SweetAlert ---------- */

function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cartCount").textContent = cart.length;

  Swal.fire({
    toast: true,
    position: "bottom-end",
    icon: "success",
    title: `${name} added to cart`,
    showConfirmButton: false,
    timer: 1800,
    timerProgressBar: true,
    background: document.documentElement.getAttribute("data-theme") === "dark" ? "#221910" : "#fffdf9",
    color: document.documentElement.getAttribute("data-theme") === "dark" ? "#f3ead9" : "#1c130d",
    iconColor: "#b8863b"
  });
}

function showCart() {
  if (!cart.length) {
    Swal.fire({
      title: "Your cart is empty",
      text: "Add something from the menu to get started.",
      icon: "info",
      confirmButtonColor: "#b8863b"
    });
    return;
  }

  const total = cart.reduce((sum, i) => sum + i.price, 0);
  const rows = cart
    .map(i => `<div style="display:flex;justify-content:space-between;padding:4px 0;font-family:'Space Mono',monospace;font-size:0.85rem;">
      <span>${i.name}</span><span>Rs ${i.price}</span></div>`)
    .join("");

  Swal.fire({
    title: "Your Order",
    html: `<div style="text-align:left;max-height:260px;overflow-y:auto;">${rows}</div>
           <hr>
           <div style="display:flex;justify-content:space-between;font-weight:700;">
             <span>Total</span><span>Rs ${total}</span>
           </div>`,
    confirmButtonText: "Checkout",
    confirmButtonColor: "#b8863b",
    showCancelButton: true,
    cancelButtonText: "Keep browsing"
  }).then(result => {
    if (result.isConfirmed) {
      cart = [];
      document.getElementById("cartCount").textContent = "0";
      Swal.fire({
        title: "Order placed!",
        text: "Thanks for choosing Cafe Brew.",
        icon: "success",
        confirmButtonColor: "#b8863b"
      });
    }
  });
}

/* ---------- page load ---------- */

document.addEventListener("DOMContentLoaded", () => {
  showAll(document.getElementById("allItemsBtn"));
});