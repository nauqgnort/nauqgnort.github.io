function tachTenDayDu(chuoiTen) {
    var mangTu = chuoiTen.split(" ");
    var ketQua = {
        firstName: "",
        middleName: "",
        lastName: ""
    };
    if (mangTu.length === 3) {
        ketQua.firstName = mangTu[0];
        ketQua.middleName = mangTu[1];
        ketQua.lastName = mangTu[2];
    } else if (mangTu.length === 2) {
        ketQua.firstName = mangTu[0];
        ketQua.lastName = mangTu[1];
    } else {
        ketQua.firstName = chuoiTen; 
    }
    return ketQua;
}

var ten = "Bui Trong Quan";
var ketQua = tachTenDayDu(ten);
console.log(ketQua);
