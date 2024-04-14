function kiemTraChuoiDoiXung(chuoi) {
    return chuoi === chuoi.split('').reverse().join('');
}

let chuoi1 = "madam";
let chuoi2 = "hello";
console.log("Chuỗi", chuoi1, "có phải là chuỗi đối xứng:", kiemTraChuoiDoiXung(chuoi1));
console.log("Chuỗi", chuoi2, "có phải là chuỗi đối xứng:", kiemTraChuoiDoiXung(chuoi2));
