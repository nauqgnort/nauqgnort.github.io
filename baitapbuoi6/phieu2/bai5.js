function chuyenDoiTitle(chuoi) {
    let tuArray = chuoi.toLowerCase().split(" ");
    for (let i = 0; i < tuArray.length; i++) {
        tuArray[i] = tuArray[i].charAt(0).toUpperCase() + tuArray[i].slice(1);
    }
    return tuArray.join(" ");
}

let chuoi = "welcome to javascript";
let chuoiTitle = chuyenDoiTitle(chuoi);
console.log("Chuỗi sau khi chuyển đổi sang dạng title:", chuoiTitle);
