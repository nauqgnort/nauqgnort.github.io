const mang = [1, 2, 3, 4, 5, 6];
const tong = mang.reduce(function(tong, phantu) {
    return tong + phantu;
}, 0);

console.log("Tổng của các số trong mảng là:", tong);
