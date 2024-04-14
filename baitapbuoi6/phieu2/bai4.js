function loaiBoKhoangTrangThua(chuoi) {
    return chuoi.replace(/\s+/g, ' ').trim();
}

let chuoi = "    Hello     world    ";
let chuoiSauKhiLoaiBo = loaiBoKhoangTrangThua(chuoi);
console.log("Chuỗi sau khi loại bỏ khoảng trắng thừa:", chuoiSauKhiLoaiBo);
