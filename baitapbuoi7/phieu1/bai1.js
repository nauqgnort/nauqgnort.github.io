const cart = [
    {
      title: "DẾ MÈN PHIÊU LƯU KÝ",
      price: 50000,
      quantity: 2,
    },
    {
      title: "KIM ĐỒNG",
      price: 40000,
      quantity: 7,
    },
    {
      title: "NGỌN LỬA ĐÊM BA MƯƠI",
      price: 21000,
      quantity: 4,
    },
    {
      title: "CÔ BÉ GANH TỊ",
      price: 27500,
      quantity: 5,
    },
  ];
  
  let totalPayment = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    totalPayment += item.price * item.quantity;
  }
  
  console.log("Tổng tiền thanh toán của giỏ hàng là:", totalPayment);
  