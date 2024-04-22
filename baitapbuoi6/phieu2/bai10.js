function sapXepChuoiTheoThuTuChuCai(chuoi) {
    var mangKyTu = chuoi.split("");
    mangKyTu.sort();
    var chuoiMoi = mangKyTu.join("");
    return chuoiMoi;
}

var chuoiBanDau = "programming";
var chuoiMoi = sapXepChuoiTheoThuTuChuCai(chuoiBanDau);
console.log(chuoiMoi);
