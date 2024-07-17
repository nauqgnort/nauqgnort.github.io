let orders = JSON.parse(localStorage.getItem("orders")) || [];


const products = [
  {
    name: "Nike Air Force 1 '07",
    description: "Men's Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
    price: "2929000",
    brand: "nike",
    sale: true,
    hot: true,
  },
  {
    name: "Air Jordan 1 Low",
    description: "Men's Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c0c434c-9802-4556-89c7-a8600b2828d8/air-jordan-1-low-shoes-lFCSjp.png",
    price: "3239000",
    brand: "nike",
    sale: true,
    hot: false,
  },
  {
    name: "Air Jordan 1 Low Method of Make",
    description: "Women's Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba211a1e-cda0-4296-b3fa-cdb52c0c4985/air-jordan-1-low-method-of-make-shoes-m6FCTq.png",
    price: "3959000",
    brand: "nike",
    sale: true,
    hot: false,
  },
  {
    name: "Air Jordan 1 High Method of Make",
    description: "Women's Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e5700856-4bfe-4282-81e1-cd5dee98b658/air-jordan-1-high-method-of-make-shoes-wvNP62.png",
    price: "4539000",
    brand: "nike",
    sale: false,
    hot: true,
  },
  {
    name: "Nike Blazer Mid '77 Vintage",
    description: "Men's Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png",
    price: "2929000",
    brand: "nike",
    sale: true,
    hot: false,
  },
  {
    name: "Nike Blazer Mid '77 Premium",
    description: "Men's Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/68e31b88-19a5-435f-acc1-172b67e2f927/blazer-mid-77-shoes-0dJRSm.png",
    price: "3239000",
    brand: "nike",
    sale: false,
    hot: true,
  },
  {
    name: "Jordan 1 Low Alt SE",
    description: "Kid Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ebaad3f6-0646-453b-b61a-f71dd83de9be/jordan-1-low-alt-se-shoes-C6tC2F.png",
    price: "1529000",
    brand: "nike",
    sale: true,
    hot: false,
  },
  {
    name: "Jordan 1 Low Alt",
    description: "Kid Shoes",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/492a454b-39d6-4639-8172-1157b543f539/jordan-1-low-alt-shoes-jNQKZv.png",
    price: "1399000",
    brand: "nike",
    sale: false,
    hot: true,
  },

  {
    name: "SAMBA OG",
    description: "Men's Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Giay_Samba_OG_trang_B75806_01_standard.jpg",
    price: "2700000",
    brand: "adidas",
    sale: true,
    hot: false,
  },
  {
    name: "STAN SMITH LUX",
    description: "Men's Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e54cbb2a58704d0bb3bf1cf795c8e15a_9366/Giay_Stan_Smith_Lux_trang_IF8844_01_standard.jpg",
    price: "3800000",
    brand: "adidas",
    sale: false,
    hot: true,
  },
  {
    name: "RESPONSE CL",
    description: "Men's Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6044dd9dea9948f49524adaa00b9338b_9366/Giay_Response_CL_Xam_GZ1561_01_standard.jpg",
    price: "3300000",
    brand: "adidas",
    sale: true,
    hot: false,
  },
  {
    name: "ULTRABOOST 1.0",
    description: "Men's Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad84b99019d4386a67cd03ecc51c0a4_9366/Giay_Ultraboost_1.0_DJen_HQ4201_HM1.jpg",
    price: "4500000",
    brand: "adidas",
    sale: true,
    hot: true,
  },
  {
    name: "GAZELLE",
    description: "Women's Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/GAZELLE_B41645_01_standard.jpg",
    price: "2500000",
    brand: "adidas",
    sale: true,
    hot: false,
  },
  {
    name: "FORUM BOLD STRIPES SHOES",
    description: "Women's Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08a216d694bd4effa5a315de597d8964_9366/Forum_Bold_Stripes_Shoes_White_ID0404_01_standard.jpg",
    price: "2600000",
    brand: "adidas",
    sale: false,
    hot: false,
  },
  {
    name: "STAN SMITH PF SHOES",
    description: "Women's Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8514e5540bca4f32bebea833b6aca593_9366/Stan_Smith_PF_Shoes_White_IE0450_01_standard.jpg",
    price: "3000000",
    brand: "adidas",
    sale: true,
    hot: true,
    hot: true,
  },
  {
    name: "STAR WARS GRAND COURT 2.0 SHOES KIDS",
    description: "Kid Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2d89612be774e3c8aab0eed44a54dcf_9366/Star_Wars_Grand_Court_2.0_Shoes_Kids_White_IH8035_01_standard.jpg",
    price: "1200000",
    brand: "adidas",
    sale: true,
    hot: false,
  },
  {
    name: "TENSAUR SPORT TRAINING LACE SHOES",
    description: "Kid Shoes",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0831ff349ce042e084d1ae91010a1c30_9366/Tensaur_Sport_Training_Lace_Shoes_White_GW6438_01_standard.jpg",
    price: "1000000",
    brand: "adidas",
    sale: false,
    hot: false,
  },

  {
    name: "VANS KNU SKOOL BLACK/TRUE WHITE",
    description: "Men's Shoes",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/giay-vans-knu-skool-black-true-white-vn0009qc6bt-1.jpg?v=1687606964757",
    price: "2400000",
    brand: "vans",
    sale: true,
    hot: true,
  },
  {
    name: "VANS CHECKERBOARD SLIP-ON CLASSIC BLACK/OFF WHITE",
    description: "Women's Shoes",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-slip-on-checkerboard-black-off-white-vn000eyebww-1.png",
    price: "1377500",
    brand: "vans",
    sale: false,
    hot: false,
  },
  {
    name: "VANS CLASSIC SK8-HI BLACK/WHITE",
    description: "Men's Shoes",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/140/774/products/vans-sk8-hi-classic-black-white-vn000d5ib8c-1.jpg",
    price: "1950000",
    brand: "vans",
    sale: true,
    hot: true,
  },
  {
    name: "Chuck 70 Plus",
    description: "Men's Shoes",
    image:
      "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CONA00916C005004-1.jpg",
    price: "2500000",
    brand: "converse",
    sale: false,
    hot: true,
  },
  {
    name: "Run Star Motion CX Platform",
    description: "Men's Shoes",
    image:
      "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CONA03924C005006-1.jpg",
    price: "2600000",
    brand: "converse",
    sale: true,
    hot: false,
  },
  {
    name: "Chuck 70",
    description: "Women's Shoes",
    image:
      "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CON162062C000004-1.jpg",
    price: "1900000",
    brand: "converse",
    sale: true,
    hot: false,
  },
  {
    name: "Chuck Taylor All Star Easy-On Rainbows",
    description: "Kid Shoes",
    image:
      "https://www.converse.vn/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/8/0882-CONA04771C0PK012-1.jpg",
    price: "700000",
    brand: "converse",
    sale: false,
    hot: true,
  },
  {
    name: "Reebok Club C 85",
    description: "Men's Shoes",
    image:
      "https://images.reebok.eu/reebok-club-c-85-shoes_19729666_44840525_1000.jpg?c=1",
    price: "2490000",
    brand: "reebok",
    sale: true,
    hot: true,
  },
  {
    name: "Classic Leather SP Extra Sneakers",
    description: "Women's Shoes",
    image:
      "https://images.reebok.eu/reebok-classic-leather-sp-extra-sneakers_22251500_52744723_1000.jpg?c=1",
    price: "2390000",
    brand: "reebok",
    sale: false,
    hot: false,
  },
];
localStorage.setItem("products", JSON.stringify(products));
function loadOrders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const orderList = document.getElementById("orderList");
  orderList.innerHTML = "";

  orders.forEach((order, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
          <td>${index + 1}</td>
          <td>${order.customerName}</td>
          <td>${order.status || "Đang chờ xác nhận"}</td>
          <td class="actions">
              <button onclick="updateOrderStatus(${index}, 'Đang chờ xác nhận')">Đang chờ xác nhận</button>
              <button onclick="updateOrderStatus(${index}, 'Đang giao')">Đang giao</button>
              <button onclick="updateOrderStatus(${index}, "Đã giao")">Đã giao</button>
              <button onclick="deleteOrder(${index})">Xóa</button>
          </td>
      `;

    orderList.appendChild(row);
  });
}

function updateOrderStatus(orderIndex, status) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  if (orders[orderIndex]) {
    orders[orderIndex].status = status;
    localStorage.setItem("orders", JSON.stringify(orders));
    loadOrders();
  }
}

function deleteOrder(orderIndex) {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.splice(orderIndex, 1);
  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders();
}

window.onload = loadOrders;


function displayProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  products.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}" width="50"></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.brand}</td>
            <td>
                <button onclick="editProduct(${index})">Sửa</button>
                <button onclick="deleteProduct(${index})">Xóa</button>
            </td>
        `;
    productList.appendChild(row);
  });
}


function addProduct() {
  const name = prompt("Nhập tên sản phẩm:");
  const price = prompt("Nhập giá sản phẩm:");
  const brand = prompt("Nhập nhãn hàng:");
  const image = prompt("Nhập link ảnh:");

  if (name && price && brand && image) {
    products.push({ name, price, brand, image });
    localStorage.setItem("products", JSON.stringify(products));
    displayProducts();
  } else {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
  }
}

function editProduct(index) {
  const product = products[index];
  const name = prompt("Edit product name:", product.name);
  const price = prompt("Edit product price:", product.price);
  const brand = prompt("Edit product brand:", product.brand);
  const image = prompt("Edit product image URL:", product.image);
  products[index] = { name, price, brand, image };
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}

function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  displayProducts();
}


function getUsersFromLocalStorage() {
  try {
    const users = JSON.parse(localStorage.getItem("account_login")) || [];
    return Array.isArray(users) ? users : [];
  } catch (error) {
    console.error("Error parsing JSON from localStorage", error);
    return [];
  }
}

function displayUsers() {
  const users = getUsersFromLocalStorage();
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${user.username}</td>
      <td>${user.email}</td>
      <td class="actions">
        <button onclick="editUser(${index})">Sửa</button>
        <button onclick="deleteUser(${index})">Xóa</button>
      </td>
    `;

    userList.appendChild(row);
  });
}

function editUser(index) {
  const users = getUsersFromLocalStorage();
  const user = users[index];
  const username = prompt("Edit username:", user.username);
  const email = prompt("Edit email:", user.email);
  if (username !== null && email !== null) {
    users[index] = { ...user, username, email };
    localStorage.setItem("account_login", JSON.stringify(users));
    displayUsers();
  }
}

function deleteUser(index) {
  if (confirm("Bạn có muốn xóa người dùng này không?")) {
    const users = getUsersFromLocalStorage();
    users.splice(index, 1);
    localStorage.setItem("account_login", JSON.stringify(users));
    displayUsers();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayUsers();
  displayProducts();
  
});

