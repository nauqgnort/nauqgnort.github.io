function tinhTongSoTrongChuoi(chuoi) {
    let tong = 0;
    for (let i = 0; i < chuoi.length; i++) {
        let charCode = chuoi.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
            tong += parseInt(chuoi[i]);
        }
    }
    return tong;
}

let chuoi = "ab1k2p3";
let tong = tinhTongSoTrongChuoi(chuoi);
console.log("Tổng các số trong chuỗi:", tong);
