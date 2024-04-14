function chuanHoaTen(chuoiTen) {
    chuoiTen = chuoiTen.toLowerCase().trim();
    let tuArray = chuoiTen.split(" ");
    for (let i = 0; i < tuArray.length; i++) {
        tuArray[i] = tuArray[i].charAt(0).toUpperCase() + tuArray[i].slice(1);
    }
    return tuArray.join(" ");
}

let chuoiTen = "BùI TRọnG quÂn";
let tenChuanHoa = chuanHoaTen(chuoiTen);
console.log("Tên sau khi chuẩn hóa:", tenChuanHoa);
