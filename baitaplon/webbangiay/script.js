document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const loginLink = document.getElementById("login-link");
  const storedAccountJSON = localStorage.getItem("account_login");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const menLink = document.getElementById("men-link");
  const womenLink = document.getElementById("women-link");
  const kidsLink = document.getElementById("kids-link");
  const saleLink = document.getElementById("sale-link");
  const hotLink = document.getElementById("hot-link");
  const cartItems = document.getElementById("cart-items");
  const cartContent = document.getElementById("cart-content");
  const clearCartBtn = document.getElementById("clear-cart");
  const checkoutBtn = document.getElementById("checkout");
  const closeCartBtn = document.getElementById("close-cart");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const quantitySpan = document.querySelector(".cart-icon .quantity");

  let scrollThreshold = 300;

  function updateCartQuantity() {
    const cart = localStorage.getItem("cart");
    const cartItems = cart ? JSON.parse(cart) : [];
    quantitySpan.textContent = cartItems.length;
  }

  if (storedAccountJSON !== null) {
    cartIcon.style.display = "inline";
    loginLink.style.display = "none";
  } else {
    cartIcon.style.display = "none";
    loginLink.style.display = "inline";
  }

  cartIcon.addEventListener("click", function (event) {
    if (storedAccountJSON === null) {
      event.preventDefault();
      alert("Vui lòng đăng nhập để xem giỏ hàng!");
      window.location.href = "login.html";
    } else {
      document.getElementById("cart").style.display = "block";
      displayCart();
    }
  });

  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }

  document.querySelector(".left").addEventListener("click", function () {
    plusDivs(-1);
  });

  document.querySelector(".right").addEventListener("click", function () {
    plusDivs(1);
  });

  function formatMoneyVND(money) {
    let formattedMoney = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(money);
    return formattedMoney;
  }

  menLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Nam'");
    const menShoes = products.filter(
      (product) =>
        product.description.includes("Men's Shoes") &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(menShoes);
  });

  womenLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Nữ'");
    const womenShoes = products.filter(
      (product) =>
        product.description.includes("Women's Shoes") &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(womenShoes);
  });

  kidsLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Trẻ em'");
    const kidsShoes = products.filter(
      (product) =>
        product.description.includes("Kid Shoes") &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(kidsShoes);
  });

  saleLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Sale'");
    const saleShoes = products.filter(
      (product) =>
        product.sale === true &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(saleShoes);
  });

  hotLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'hot'");
    const hotShoes = products.filter(
      (product) =>
        product.hot === true &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(hotShoes);
  });

  renderShoes(products);

  clearCartBtn.addEventListener("click", function () {
    clearCart();
  });

  closeCartBtn.addEventListener("click", function () {
    document.getElementById("cart").style.display = "none";
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > scrollThreshold) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function displayCart() {
    cartItems.innerHTML = "";

    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.forEach((item, index) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.classList.add("cart-item-image");
        img.src = item.image;
        img.alt = item.name;
        li.appendChild(img);

        const cartItemInfo = document.createElement("div");
        cartItemInfo.classList.add("cart-item-info");

        const itemName = document.createElement("span");
        itemName.classList.add("cart-item-name");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("cart-item-price");
        itemPrice.textContent = item.price;

        cartItemInfo.appendChild(itemName);
        cartItemInfo.appendChild(itemPrice);
        li.appendChild(cartItemInfo);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.classList.add("delete-item");
        deleteBtn.dataset.index = index;
        deleteBtn.addEventListener("click", function () {
          removeFromCart(index);
        });

        li.appendChild(deleteBtn);
        cartItems.appendChild(li);
      });
    }

    if (cart && cart.length > 0) {
      cartContent.style.display = "block";
    } else {
      cartContent.style.display = "none";
    }
  }

  menLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Nam'");
    const menShoes = products.filter(
      (product) =>
        product.description === "Men's Shoes" &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(menShoes);
  });

  womenLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Nữ'");
    const womenShoes = products.filter(
      (product) =>
        product.description === "Women's Shoes" &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(womenShoes);
  });

  kidsLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Trẻ em'");
    const kidsShoes = products.filter(
      (product) =>
        product.description === "Kid Shoes" &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(kidsShoes);
  });

  saleLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'Sale'");
    const saleShoes = products.filter(
      (product) =>
        product.sale === true &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(saleShoes);
  });

  hotLink.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Click vào liên kết 'hot'");
    const hotShoes = products.filter(
      (product) =>
        product.hot === true &&
        ["nike", "adidas", "vans", "converse", "reebok"].includes(product.brand)
    );
    renderShoes(hotShoes);
  });

  renderShoes(products);
  updateCartQuantity();

  function renderShoes(shoes) {
    const nikeList = document.getElementById("nike-product-list");
    const adidasList = document.getElementById("adidas-product-list");
    const vansList = document.getElementById("vans-product-list");
    const converseList = document.getElementById("converse-product-list");
    const reebokList = document.getElementById("reebok-product-list");

    nikeList.innerHTML = "";
    adidasList.innerHTML = "";
    vansList.innerHTML = "";
    converseList.innerHTML = "";
    reebokList.innerHTML = "";

    shoes.forEach((shoe) => {
      const shoeDiv = document.createElement("div");
      shoeDiv.className = "shoe";

      shoeDiv.innerHTML = `
        <img src="${shoe.image}" alt="${shoe.name}">
          <h2>${shoe.name}</h2>
          <p>${shoe.description}</p>
           <p><strong>Price: ${formatMoneyVND(shoe.price)}</strong></p>
           ${shoe.sale ? '<p class="sale">Sale!</p>' : ""}
           ${shoe.hot ? '<p class="hot">HOT!</p>' : ""}
          <button class="add-to-cart">Add To Cart</button>

      `;

      shoeDiv
        .querySelector(".add-to-cart")
        .addEventListener("click", function () {
          addToCart(shoe);
        });

      switch (shoe.brand) {
        case "nike":
          nikeList.appendChild(shoeDiv);
          break;
        case "adidas":
          adidasList.appendChild(shoeDiv);
          break;
        case "vans":
          vansList.appendChild(shoeDiv);
          break;
        case "converse":
          converseList.appendChild(shoeDiv);
          break;
        case "reebok":
          reebokList.appendChild(shoeDiv);
          break;
        default:
          console.error(
            "Không tìm thấy danh mục sản phẩm cho thương hiệu này."
          );
      }
    });
  }

  displayCart();

  clearCartBtn.addEventListener("click", function () {
    clearCart();
  });

  closeCartBtn.addEventListener("click", function () {
    toggleCart();
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > scrollThreshold) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function displayCart() {
    cartItems.innerHTML = "";

    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.forEach((item, index) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.classList.add("cart-item-image");
        img.src = item.image;
        img.alt = item.name;
        li.appendChild(img);

        const cartItemInfo = document.createElement("div");
        cartItemInfo.classList.add("cart-item-info");

        const itemName = document.createElement("span");
        itemName.classList.add("cart-item-name");
        itemName.textContent = item.name;

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("cart-item-price");
        itemPrice.textContent = formatMoneyVND(parseFloat(item.price));

        cartItemInfo.appendChild(itemName);
        cartItemInfo.appendChild(itemPrice);
        li.appendChild(cartItemInfo);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Xóa";
        deleteBtn.classList.add("delete-item");
        deleteBtn.dataset.index = index;
        deleteBtn.addEventListener("click", function () {
          removeFromCart(index);
        });

        li.appendChild(deleteBtn);
        cartItems.appendChild(li);
      });
    }

    if (cart && cart.length > 0) {
      cartContent.classList.add("show-cart");
    } else {
      cartContent.classList.remove("show-cart");
    }
  }

  function formatMoneyVND(amount) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  }

  function displayTotalPrice() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      let total = cart.reduce((accumulator, item) => {
        let price = parseFloat(item.price.replace(/[^\d.]/g, ""));
        return accumulator + price;
      }, 0);
      let formattedTotal = formatMoneyVND(total);

      document.getElementById("total-price").textContent =
        "Tổng giá: " + formattedTotal;
    } else {
      document.getElementById("total-price").textContent = "Tổng giá: 0 VND";
    }
  }

  function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
    toggleCart();
    updateCartQuantity();
    displayTotalPrice();
  }

  function removeFromCart(index) {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
      updateCartQuantity();
      displayTotalPrice();

      if (cart.length === 0) {
        toggleCart();
      }
    }
  }

  function toggleCart() {
    const cartIcon = document.getElementById("cart-icon");
    const cartContent = document.querySelector(".cart-content");

    let cart = localStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];

    if (cart.length === 0) {
      alert("Giỏ hàng của bạn đang trống");
      return;
    }
    if (cartContent.style.display === "block") {
      cartContent.style.display = "none";
    } else {
      cartContent.style.display = "block";
    }
  }
  document.getElementById("cart-icon").addEventListener("click", toggleCart);

  function isUserLoggedIn() {
    return localStorage.getItem("logged_in") === "true";
  }
  function addToCart(product) {
    if (!isUserLoggedIn()) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng.");
      return;
    }

    let cart = localStorage.getItem("cart");
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
    updateCartQuantity();
    displayCart();
    displayTotalPrice();
  }

  checkoutBtn.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
});
