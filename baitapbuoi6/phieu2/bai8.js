function thayTheChuoiCon(chuoi, chuoiCon, chuoiThayThe) {
    return chuoi.replace(chuoiCon, chuoiThayThe);
}

let chuoi = "Hello, world!";
let chuoiConCanThayThe = "world";
let chuoiThayThe = "universe";
let chuoiMoi = thayTheChuoiCon(chuoi, chuoiConCanThayThe, chuoiThayThe);
console.log("Chuỗi sau khi thay thế:", chuoiMoi);
