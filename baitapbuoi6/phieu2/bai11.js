function chuyenDoiSangCamelCase(chuoi) {
    var mangTu = chuoi.split(" ");
    for (var i = 0; i < mangTu.length; i++) {
        if (i === 0) {
            mangTu[i] = mangTu[i].toLowerCase();
        } else {
            mangTu[i] = mangTu[i].charAt(0).toUpperCase() + mangTu[i].slice(1).toLowerCase();
        }
    }
    var chuoiMoi = mangTu.join("");
    return chuoiMoi;
}

var chuoiBanDau = "hello world of programming";
var chuoiCamelCase = chuyenDoiSangCamelCase(chuoiBanDau);
console.log(chuoiCamelCase);
