// Sample product data
const products = [
  {
    id: 1,
    name: "women's Kurti",
    brand: "Nike",
    description: "Comfortable and stylish ",
    price: 499,
    original: 1299,
    discount: "62% OFF",
    category: "women",
    image: "imge/hmgirl2.jpg",
  },
  {
    id: 2,
    name: "Women's Kurti",
    brand: "Adidas",
    description: "Elegant and traditional",
    price: 899,
    original: 1799,
    discount: "50% OFF",
    category: "women",
    image: "imge/hmgril1.jpg",
  },
  {
    id: 3,
    name: "Kids' Shoes",
    brand: "Puma",
    description: "Durable and trendy",
    price: 699,
    original: 1399,
    discount: "50% OFF",
    category: "kids",
    image: "imge/kidsshoes1.jpg",
  },
  {
    id: 4,
    name: "women's Sneakers",
    brand: "Nike",
    description: "Perfect for sports & casual",
    price: 1199,
    original: 2399,
    discount: "50% OFF",
    category: "women",
    image: "imge/womenshoes.jpg",
  },
  {
    id: 5,
    name: "Men's Sneakers",
    brand: "Pumma",
    description: "Sporty & comfortable",
    price: 1299,
    original: 2599,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumashoes1.jpg",
  },
  {
    id: 6,
    name: "Men's Sneakers",
    brand: "Pumma",
    description: "Trendy design for daily wear",
    price: 1349,
    original: 2699,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumashoes2.jpg",
  },
  {
    id: 7,
    name: "Men's Sneakers",
    brand: "Pumma",
    description: "Lightweight and durable",
    price: 1399,
    original: 2799,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumashoes3.jpg",
  },
  {
    id: 8,
    name: "Men's Sneakers",
    brand: "Pumma",
    description: "Breathable mesh upper",
    price: 1449,
    original: 2899,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumashoes4.jpg",
  },
  {
    id: 9,
    name: "Men's Sneakers",
    brand: "Pumma",
    description: "Classic style with comfort",
    price: 1499,
    original: 2999,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumashoes5.jpg",
  },
  {
    id: 10,
    name: "Men's Sneakers",
    brand: "Pumma",
    description: "Perfect for running and gym",
    price: 1549,
    original: 3099,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumashoes6.jpg",
  },
  {
    id: 11,
    name: "Men's Sneakers",
    brand: "Nike",
    description: "Premium comfort and style",
    price: 1599,
    original: 3199,
    discount: "50% OFF",
    category: "men",
    image: "imge/nikeshoes1.jpg",
  },
  {
    id: 12,
    name: "Men's Sneakers",
    brand: "Nike",
    description: "Lightweight running sneakers",
    price: 1649,
    original: 3299,
    discount: "50% OFF",
    category: "men",
    image: "imge/nikeshoes2.jpg",
  },
  {
    id: 13,
    name: "Men's Sneakers",
    brand: "Nike",
    description: "Classic white design",
    price: 1699,
    original: 3399,
    discount: "50% OFF",
    category: "men",
    image: "imge/nikeshoes3.jpg",
  },
  {
    id: 14,
    name: "Men's Sneakers",
    brand: "Nike",
    description: "Breathable mesh upper",
    price: 1749,
    original: 3499,
    discount: "50% OFF",
    category: "men",
    image: "imge/nikeshoes4.jpg",
  },
  {
    id: 15,
    name: "Men's Sneakers",
    brand: "Nike",
    description: "All-day comfort for sports",
    price: 1799,
    original: 3599,
    discount: "50% OFF",
    category: "men",
    image: "imge/nikeshoes5.jpg",
  },
  {
    id: 16,
    name: "Men's Sneakers",
    brand: "Nike",
    description: "Trendy streetwear look",
    price: 1849,
    original: 3699,
    discount: "50% OFF",
    category: "men",
    image: "imge/nikeshoes6.jpg",
  },
  {
    id: 17,
    name: "Men's Sneakers",
    brand: "Nike",
    description: "Durable sole for running",
    price: 1899,
    original: 3799,
    discount: "50% OFF",
    category: "men",
    image: "imge/nikeshoes7.jpg",
  },
  {
    id: 18,
    name: "Men's Sneakers",
    brand: "Adidas",
    description: "Sporty and comfortable design",
    price: 1199,
    original: 2399,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidasshoes1.jpg",
  },
  {
    id: 19,
    name: "Men's Sneakers",
    brand: "Adidas",
    description: "Lightweight running sneakers",
    price: 1249,
    original: 2499,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidasshoes2.jpg",
  },
  {
    id: 20,
    name: "Men's Sneakers",
    brand: "Adidas",
    description: "Classic black style",
    price: 1299,
    original: 2599,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidasshoes3.jpg",
  },
  {
    id: 21,
    name: "Men's Sneakers",
    brand: "Adidas",
    description: "Breathable mesh upper",
    price: 1349,
    original: 2699,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidasshoes4.jpg",
  },
  {
    id: 22,
    name: "Men's Sneakers",
    brand: "Adidas",
    description: "All-day comfort for sports",
    price: 1399,
    original: 2799,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidasshoes5.jpg",
  },
  {
    id: 23,
    name: "Men's Sneakers",
    brand: "Adidas",
    description: "Trendy streetwear look",
    price: 1449,
    original: 2899,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidasshoes6.jpg",
  },
  {
    id: 24,
    name: "Men's Sneakers",
    brand: "Adidas",
    description: "Durable sole for running",
    price: 1499,
    original: 2999,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidasshoes7.jpg",
  },

  // mens tshirts
  {
    id: 25,
    name: "Men's T-Shirt",
    brand: "Nike",
    description: "Classic black Nike T-shirt",
    price: 599,
    original: 1199,
    discount: "50% OFF",
    category: "men",
    image: "imge/niketshirt1.jpg",
  },
  {
    id: 26,
    name: "Men's T-Shirt",
    brand: "Nike",
    description: "White cotton Nike T-shirt",
    price: 649,
    original: 1299,
    discount: "50% OFF",
    category: "men",
    image: "imge/niketshirt2.jpg",
  },
  {
    id: 27,
    name: "Men's T-Shirt",
    brand: "Nike",
    description: "Blue sporty Nike T-shirt",
    price: 699,
    original: 1399,
    discount: "50% OFF",
    category: "men",
    image: "imge/niketshirt3.jpg",
  },
  {
    id: 28,
    name: "Men's T-Shirt",
    brand: "Nike",
    description: "Grey casual Nike T-shirt",
    price: 749,
    original: 1499,
    discount: "50% OFF",
    category: "men",
    image: "imge/niketshirt4.jpg",
  },
  {
    id: 29,
    name: "Men's T-Shirt",
    brand: "Nike",
    description: "Red graphic Nike T-shirt",
    price: 799,
    original: 1599,
    discount: "50% OFF",
    category: "men",
    image: "imge/niketshirt.jpg",
  },
  {
    id: 30,
    name: "Men's T-Shirt",
    brand: "Pumma",
    description: "Classic black Pumma T-shirt",
    price: 599,
    original: 1199,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumatshirt1.jpg",
  },
  {
    id: 31,
    name: "Men's T-Shirt",
    brand: "Pumma",
    description: "White cotton Pumma T-shirt",
    price: 649,
    original: 1299,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumatshirt2.jpg",
  },
  {
    id: 32,
    name: "Men's T-Shirt",
    brand: "Pumma",
    description: "Blue sporty Pumma T-shirt",
    price: 699,
    original: 1399,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumatshirt3.jpg",
  },
  {
    id: 33,
    name: "Men's T-Shirt",
    brand: "Pumma",
    description: "Grey casual Pumma T-shirt",
    price: 749,
    original: 1499,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumatshirt4.jpg",
  },
  {
    id: 34,
    name: "Men's T-Shirt",
    brand: "Pumma",
    description: "Red graphic Pumma T-shirt",
    price: 799,
    original: 1599,
    discount: "50% OFF",
    category: "men",
    image: "imge/pumatshirt.jpg",
  },
  {
    id: 35,
    name: "Men's T-Shirt",
    brand: "Adidas",
    description: "Classic black Adidas T-shirt",
    price: 599,
    original: 1199,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidastshirt1.jpg",
  },
  {
    id: 36,
    name: "Men's T-Shirt",
    brand: "Adidas",
    description: "White cotton Adidas T-shirt",
    price: 649,
    original: 1299,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidastshirt2.jpg",
  },
  {
    id: 37,
    name: "Men's T-Shirt",
    brand: "Adidas",
    description: "Blue sporty Adidas T-shirt",
    price: 699,
    original: 1399,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidastshirt3.jpg",
  },
  {
    id: 38,
    name: "Men's T-Shirt",
    brand: "Adidas",
    description: "Grey casual Adidas T-shirt",
    price: 749,
    original: 1499,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidastshirt4.jpg",
  },
  {
    id: 39,
    name: "Men's T-Shirt",
    brand: "Adidas",
    description: "Red graphic Adidas T-shirt",
    price: 799,
    original: 1599,
    discount: "50% OFF",
    category: "men",
    image: "imge/adidastshirt5.jpg",
  },
];

// DOM Elements
const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeLogin = document.getElementById("closeLogin");
const submitLogin = document.getElementById("submitLogin");
const cartItemsContainer = document.getElementById("cartItems");
const cartModal = document.getElementById("cartModal");
const cartIcon = document.getElementById("cartIcon");
const maindiv = document.getElementById("maindiv");

// Cart state
let cart = [];

// Render Products
function renderProducts() {
  productGrid.innerHTML = "";
  const selectedCategories = [
    ...document.querySelectorAll(".filter-checkbox:checked"),
  ].map((cb) => cb.value);
  const selectedPrices = [
    ...document.querySelectorAll(".price-checkbox:checked"),
  ].map((cb) => cb.value);
  const selectedBrands = [
    ...document.querySelectorAll(".brand-checkbox:checked"),
  ].map((cb) => cb.value);

  const filtered = products.filter((product) => {
    let categoryMatch = selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true;
    let priceMatch = true;
    if (selectedPrices.length) {
      priceMatch = selectedPrices.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return product.price >= min && product.price <= max;
      });
    }
    let brandMatch = selectedBrands.length
      ? selectedBrands.includes(product.brand)
      : true;

    return categoryMatch && priceMatch && brandMatch;
  });
 

  filtered.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.brand}</h4>
      <p>${product.name}</p>
      <p>${product.description || "No description available"}</p>
      <h5>₹${product.price}</h5>
      <button id="procardbtn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(card);
  });
}

// Add to Cart
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount.textContent = cart.length;
    alert(`${product.name} added to cart!`);
  }
}


// Load cart from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = storedCart;
  cartCount.textContent = cart.length;
});





// Toggle Login Modal
loginBtn.addEventListener("click", () => loginModal.classList.add("visible"));
// loginModal.addEventListener("click", (e) => {
closeLogin.addEventListener("click", () => loginModal.classList.remove("visible"));
//   if (e.target === loginModal) {
//     loginModal.classList.remove("visible");
//   }
// });
submitLogin.addEventListener("click", () => {
  alert("Logged in!");
  loginModal.classList.add("hidden");
});

// Filter Change
document.querySelectorAll(".filter-checkbox, .price-checkbox, .brand-checkbox").forEach((cb) => {
  cb.addEventListener("change", renderProducts);
});

// Cart Modal
cartIcon.addEventListener("click", () => {
  if (cart.length === 0) return alert("Cart is empty!");
  cartItemsContainer.innerHTML = "";
  cart.forEach((item) => {
  const div = document.createElement('div');
  div.className = "cart-item";
  div.innerHTML = `
  <input type="checkbox" value=1 class="cart-checkbox" />
    <img src="${item.image}" alt="Product"/>
    <div class="cart-details">
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <p><strong>₹${item.price}</strong> <span style="text-decoration: line-through; color: gray;">₹${item.original}</span> <span style="color: orange;">${item.discount}</span></p>
      <p>Size: 38 &nbsp; Qty: 1</p>
      <p><span style="color: green;">Delivery in 2 days</span></p>
    </div>
  `;
  // Track selected items count
  const selectedItems = document.getElementById("selectedItems");
  let itemsCount = 0;
  selectedItems.innerHTML = `${itemsCount}/${cart.length} items selected`; 
  const cartCheckbox = div.querySelector(".cart-checkbox");
  cartCheckbox.addEventListener("change", () => {
    itemsCount = cartItemsContainer.querySelectorAll(".cart-checkbox:checked").length;
    
    selectedItems.innerHTML = `${itemsCount}/${cart.length} items selected`;
  });


  const maincheck = document.getElementById("maincheck");

  // When maincheck is changed, check/uncheck all cart checkboxes
  maincheck.addEventListener("change", () => {
    const allCheckboxes = cartItemsContainer.querySelectorAll(".cart-checkbox");
    allCheckboxes.forEach(cb => cb.checked = maincheck.checked);

    // Update selected items count
    const selectedItems = document.getElementById("selectedItems");
    const itemsCount = maincheck.checked ? cart.length : 0;
    selectedItems.innerHTML = `${itemsCount}/${cart.length} items selected`;
  });

  // Helper to update maincheck state based on individual checkboxes
  function updateMainCheck() {
    const allCheckboxes = cartItemsContainer.querySelectorAll(".cart-checkbox");
    const checkedCount = cartItemsContainer.querySelectorAll(".cart-checkbox:checked").length;
    // If all are checked, maincheck is checked; if any is unchecked, maincheck is unchecked
    maincheck.checked = allCheckboxes.length > 0 && checkedCount === allCheckboxes.length;
    // Update selected items count
    const selectedItems = document.getElementById("selectedItems");
    selectedItems.innerHTML = `${checkedCount}/${cart.length} items selected`;
  }

  // Call updateMainCheck whenever an individual checkbox changes
  cartCheckbox.addEventListener("change", () => {
    itemsCount = cartItemsContainer.querySelectorAll(".cart-checkbox:checked").length;
    selectedItems.innerHTML = `${itemsCount}/${cart.length} items selected`;
    updateMainCheck();
  });

  cartItemsContainer.appendChild(div);
  });


  cartModal.classList.add("visible");
  maindiv.classList.add("hidden");
});
document.getElementById("checkoutBtn").addEventListener("click", () => {
  alert("Checkout complete!");
  cart = [];
  cartCount.textContent = 0;
  cartModal.classList.remove("visible");
   maindiv.classList.remove("hidden");
});
document.getElementById("closeCart").addEventListener("click", () => {
  cartModal.classList.remove("visible");
  maindiv.classList.remove("hidden");
});
document.getElementById("placeOder").addEventListener("click", () => {
  alert("Checkout complete!");
  cart = [];
  cartCount.textContent = 0;
  cartModal.classList.remove("visible");
  // document.body.classList.remove("body2");
   maindiv.classList.remove("hidden");
});


// DOWN SECTION DIV

function hoverIn1() {
  //  document.body.classList.add("body2");
  const downSection = document.getElementById("downSection1");
  downSection.style.visibility = "visible";
  const transp = document.getElementById("transp");
  transp.style.visibility = "visible";
}

function hoverOut1() {
  // document.body.classList.remove("body2");
  const downSection = document.getElementById("downSection1");
  const transp = document.getElementById("transp");
  
    downSection.addEventListener("mouseover", () => {
      downSection.style.visibility = "visible";
      transp.style.visibility = "visible";
    });
    downSection.addEventListener("mouseout", () => {
      downSection.style.visibility = "hidden";
      transp.style.visibility = "hidden";
    });
  
    downSection.style.visibility = "hidden";
    transp.style.visibility = "hidden";
  
  
}


function hoverIn2() {
  //  document.body.classList.add("body2");
  const downSection = document.getElementById("downSection2");
  downSection.style.visibility = "visible";
  const transp = document.getElementById("transp");
  transp.style.visibility = "visible";
}

function hoverOut2() {
  // document.body.classList.remove("body2");
  const downSection = document.getElementById("downSection2");
  const transp = document.getElementById("transp");
   downSection.addEventListener("mouseover", () => {
      downSection.style.visibility = "visible";
      transp.style.visibility = "visible";
    });
    downSection.addEventListener("mouseout", () => {
      downSection.style.visibility = "hidden";
      transp.style.visibility = "hidden";
    });
  
    downSection.style.visibility = "hidden";
    transp.style.visibility = "hidden";
}

function hoverIn3() {
  //  document.body.classList.add("body2");
  const downSection = document.getElementById("downSection3");
  downSection.style.visibility = "visible";
  const transp = document.getElementById("transp");
  transp.style.visibility = "visible";
}

function hoverOut3() {
  // document.body.classList.remove("body2");
  const downSection = document.getElementById("downSection3");
  const transp = document.getElementById("transp");
   downSection.addEventListener("mouseover", () => {
      downSection.style.visibility = "visible";
      transp.style.visibility = "visible";
    });
    downSection.addEventListener("mouseout", () => {
      downSection.style.visibility = "hidden";
      transp.style.visibility = "hidden";
    });
  
    downSection.style.visibility = "hidden";
    transp.style.visibility = "hidden";
}

function hoverIn4() {
  //  document.body.classList.add("body2");
  const downSection = document.getElementById("downSection4");
  downSection.style.visibility = "visible";
  const transp = document.getElementById("transp");
  transp.style.visibility = "visible";
}

function hoverOut4() {
  const downSection = document.getElementById("downSection4");
  const transp = document.getElementById("transp");
   downSection.addEventListener("mouseover", () => {
      downSection.style.visibility = "visible";
      transp.style.visibility = "visible";
    });
    downSection.addEventListener("mouseout", () => {
      downSection.style.visibility = "hidden";
      transp.style.visibility = "hidden";
    });
  
    downSection.style.visibility = "hidden";
    transp.style.visibility = "hidden";
}

function hoverIn5() {
  //  document.body.classList.add("body2");
  const downSection = document.getElementById("downSection5");
  downSection.style.visibility = "visible";
  const transp = document.getElementById("transp");
  transp.style.visibility = "visible";
  
}

function hoverOut5() {
  // document.body.classList.remove("body2");
  const downSection = document.getElementById("downSection5");
  const transp = document.getElementById("transp");
   downSection.addEventListener("mouseover", () => {
      downSection.style.visibility = "visible";
      transp.style.visibility = "visible";
    });
    downSection.addEventListener("mouseout", () => {
      downSection.style.visibility = "hidden";
      transp.style.visibility = "hidden";
    });
  
    downSection.style.visibility = "hidden";
    transp.style.visibility = "hidden";
}

function hoverIn6() {
  //  document.body.classList.add("body2");
  const downSection = document.getElementById("downSection6");
  downSection.style.visibility = "visible";
  const transp = document.getElementById("transp");
  transp.style.visibility = "visible";
}

function hoverOut6() {
  // document.body.classList.remove("body2");
  const downSection = document.getElementById("downSection6");
  const transp = document.getElementById("transp");
   downSection.addEventListener("mouseover", () => {
      downSection.style.visibility = "visible";
      transp.style.visibility = "visible";
    });
    downSection.addEventListener("mouseout", () => {
      downSection.style.visibility = "hidden";
      transp.style.visibility = "hidden";
    });
  
    downSection.style.visibility = "hidden";
    transp.style.visibility = "hidden";
}

function hoverIn7() {
  //  document.body.classList.add("body2");
  const downSection = document.getElementById("downSection7");
  downSection.style.visibility = "visible";
  const transp = document.getElementById("transp");
  transp.style.visibility = "visible";
}

function hoverOut7() {
  // document.body.classList.remove("body2");
  const downSection = document.getElementById("downSection7");
  const transp = document.getElementById("transp");
   downSection.addEventListener("mouseover", () => {
      downSection.style.visibility = "visible";
      transp.style.visibility = "visible";
    });
    downSection.addEventListener("mouseout", () => {
      downSection.style.visibility = "hidden";
      transp.style.visibility = "hidden";
    });
  
    downSection.style.visibility = "hidden";
    transp.style.visibility = "hidden";
}
//CLOSED DOWN SECTION DIV\




// Dark Mode Toggle Button
const themeToggleBtn = document.createElement("button");
themeToggleBtn.textContent = "🌓 Toggle Theme";
themeToggleBtn.style.position = "fixed";
themeToggleBtn.style.bottom = "20px";
themeToggleBtn.style.right = "20px";
themeToggleBtn.style.padding = "0.5rem 1rem";
themeToggleBtn.style.borderRadius = "6px";
themeToggleBtn.style.border = "none";
themeToggleBtn.style.background = "#444";
themeToggleBtn.style.color = "#fff";
document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Init
renderProducts();



// ALL SCRIPT OF INDEX.HTML IS HERE 



// INDEX.HTML SCRTPT CLOSED