const mang = [-1, 1, 2, 3, 4, 5];

const tatCaSoDuong = mang.every(function(phantu) {
    return phantu > 0;
});

if (tatCaSoDuong) {
    console.log("Tất cả các số trong mảng là số dương.");
} else {
    console.log("Có ít nhất một số trong mảng không phải là số dương.");
}
