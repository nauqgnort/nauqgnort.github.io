function demSoLanXuatHien(chuoi, kyTu) {
    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            dem++;
        }
    }
    return dem;
}

let chuoi = "programming";
let kyTu = "m";
let soLanXuatHien = demSoLanXuatHien(chuoi, kyTu);
console.log("Số lần xuất hiện của ký tự", kyTu, "trong chuỗi:", soLanXuatHien);
