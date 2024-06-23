document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart-icon");
  const loginLink = document.getElementById("login-link");
  const storedAccountJSON = localStorage.getItem("account_login");
  const menLink = document.getElementById("men-link");
  const womenLink = document.getElementById("women-link");
  const kidsLink = document.getElementById("kids-link");
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

  const products = [
    {
      name: "Nike Air Force 1 '07",
      description: "Men's Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
      price: "2,929,000 VND",
      brand: "nike",
    },
    {
      name: "Air Jordan 1 Low",
      description: "Men's Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/air-jordan-1-low-shoes-lFCSjp.png",
      price: "3,239,000 VND",
      brand: "nike",
    },
    {
      name: "Air Jordan 1 Low Method of Make",
      description: "Women's Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba211a1e-cda0-4296-b3fa-cdb52c0c4985/air-jordan-1-low-method-of-make-shoes-m6FCTq.png",
      price: "3,959,000 VND",
      brand: "nike",
    },
    {
      name: "Air Jordan 1 High Method of Make",
      description: "Women's Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5700856-4bfe-4282-81e1-cd5dee98b658/air-jordan-1-high-method-of-make-shoes-wvNP62.png",
      price: "4,539,000 VND",
      brand: "nike",
    },
    {
      name: "Nike Blazer Mid '77 Vintage",
      description: "Men's Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png",
      price: "2,929,000 VND",
      brand: "nike",
    },
    {
      name: "Nike Blazer Mid '77 Premium",
      description: "Men's Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/68e31b88-19a5-435f-acc1-172b67e2f927/blazer-mid-77-shoes-0dJRSm.png",
      price: "3,239,000 VND",
      brand: "nike",
    },
    {
      name: "Jordan 1 Low Alt SE",
      description: "Kid Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ebaad3f6-0646-453b-b61a-f71dd83de9be/jordan-1-low-alt-se-shoes-C6tC2F.png",
      price: "1,529,000 VND",
      brand: "nike",
    },
    {
      name: "Jordan 1 Low Alt",
      description: "Kid Shoes",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/492a454b-39d6-4639-8172-1157b543f539/jordan-1-low-alt-shoes-jNQKZv.png",
      price: "1,399,000 VND",
      brand: "nike",
    },

    {
      name: "SAMBA OG",
      description: "Men's Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Giay_Samba_OG_trang_B75806_01_standard.jpg",
      price: "2.700.000",
      brand: "adidas",
    },
    {
      name: "STAN SMITH LUX",
      description: "Men's Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e54cbb2a58704d0bb3bf1cf795c8e15a_9366/Giay_Stan_Smith_Lux_trang_IF8844_01_standard.jpg",
      price: "3.800.000 VND",
      brand: "adidas",
    },
    {
      name: "RESPONSE CL",
      description: "Men's Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6044dd9dea9948f49524adaa00b9338b_9366/Giay_Response_CL_Xam_GZ1561_01_standard.jpg",
      price: "3.300.000 VND",
      brand: "adidas",
    },
    {
      name: "ULTRABOOST 1.0",
      description: "Men's Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad84b99019d4386a67cd03ecc51c0a4_9366/Giay_Ultraboost_1.0_DJen_HQ4201_HM1.jpg",
      price: "4.500.000 VND",
      brand: "adidas",
    },
    {
      name: "GAZELLE",
      description: "Women's Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/GAZELLE_B41645_01_standard.jpg",
      price: "2.500.000 VND",
      brand: "adidas",
    },
    {
      name: "FORUM BOLD STRIPES SHOES",
      description: "Women's Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08a216d694bd4effa5a315de597d8964_9366/Forum_Bold_Stripes_Shoes_White_ID0404_01_standard.jpg",
      price: "2,600,000 VND",
      brand: "adidas",
    },
    {
      name: "STAN SMITH PF SHOES",
      description: "Women's Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8514e5540bca4f32bebea833b6aca593_9366/Stan_Smith_PF_Shoes_White_IE0450_01_standard.jpg",
      price: "3,000,000 VND",
      brand: "adidas",
    },
    {
      name: "STAR WARS GRAND COURT 2.0 SHOES KIDS",
      description: "Kid Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2d89612be774e3c8aab0eed44a54dcf_9366/Star_Wars_Grand_Court_2.0_Shoes_Kids_White_IH8035_01_standard.jpg",
      price: "1,200,000 VND",
      brand: "adidas",
    },
    {
      name: "TENSAUR SPORT TRAINING LACE SHOES",
      description: "Kid Shoes",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0831ff349ce042e084d1ae91010a1c30_9366/Tensaur_Sport_Training_Lace_Shoes_White_GW6438_01_standard.jpg",
      price: "1,000,000 VND",
      brand: "adidas",
    },

    {
      name: "VANS KNU SKOOL BLACK/TRUE WHITE",
      description: "Men's Shoes",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-knu-skool-black-true-white-vn0009qc6bt-1.jpg?v=1687606964757",
      price: "2.400.000 VND",
      brand: "vans",
    },
    {
      name: "VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE",
      description: "Women's Shoes",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-1.png",
      price: "1.377.500 VND",
      brand: "vans",
    },
    {
      name: "VANS CLASSIC SK8-HI BLACK/WHITE",
      description: "Men's Shoes",
      image:
        "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg",
      price: "1.950.000 VND",
      brand: "vans",
    },
    {
      name: "Chuck 70 Plus",
      description: "Men's Shoes",
      image:
        "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CONA00916C005004-1.jpg",
      price: "2,500,000 VND",
      brand: "converse",
    },
    {
      name: "Run Star Motion CX Platform",
      description: "Men's Shoes",
      image:
        "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CONA03924C005006-1.jpg",
      price: "2,600,000 VND",
      brand: "converse",
    },
    {
      name: "Chuck 70",
      description: "Women's Shoes",
      image:
        "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CON162062C000004-1.jpg",
      price: "1,900,000 VND",
      brand: "converse",
    },
    {
      name: "Chuck Taylor All Star Easy-On Rainbows",
      description: "Kid Shoes",
      image:
        "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CONA04771C0PK012-1.jpg",
      price: "700,000 VND",
      brand: "converse",
    },
    {
      name: "Reebok Club C 85",
      description: "Men's Shoes",
      image:
        "https://images.reebok.eu/reebok-club-c-85-shoes_19729666_44840525_1000.jpg?c=1",
      price: "2,490,000 VND",
      brand: "reebok",
    },
    {
      name: "Classic Leather SP Extra Sneakers",
      description: "Women's Shoes",
      image:
        "https://images.reebok.eu/reebok-classic-leather-sp-extra-sneakers_22251500_52744723_1000.jpg?c=1",
      price: "2,390,000 VND",
      brand: "reebok",
    },
  ];
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

  renderShoes(products);

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
        <p>${shoe.price}</p>
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
        <p>${shoe.price}</p>
        <br>
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
      cartContent.classList.add("show-cart");
    } else {
      cartContent.classList.remove("show-cart");
    }
  }

  function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
    toggleCart();
    updateCartQuantity();
  }

  function checkout() {
    if (!localStorage.getItem("cart")) {
      alert("Giỏ hàng của bạn đang trống!");
      return;
    }

    alert("Bạn đã thanh toán thành công!");
    clearCart();
  }

  function removeFromCart(index) {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart();
      updateCartQuantity();

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
}
});
