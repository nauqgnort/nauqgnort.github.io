function demSoTu(chuoi) {
    let tuArray = chuoi.split(" ");
    return tuArray.length;
}

let chuoi = "This is a sentence.";
let soTu = demSoTu(chuoi);
console.log("Số từ trong chuỗi:", soTu);
