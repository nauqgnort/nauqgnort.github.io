const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" }, 
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
];

let countNam = 0;
let countNu = 0;
let doTuoi = {
    treCon: 0,
    thanhNien: 0,
    nguoiGia: 0
};

for (let i = 0; i < listPersons.length; i++) {
    if (listPersons[i].gender === "nam") {
        countNam++;
    } else if (listPersons[i].gender === "nữ") {
        countNu++;
    }
}

for (let j = 0; j < listPersons.length; j++) {
    let age = listPersons[j].age;
    if (age >= 30) {
        doTuoi.nguoiGia++;
    } else if (age >= 18) {
        doTuoi.thanhNien++;
    } else {
        doTuoi.treCon++;
    }
}


console.log("Số lượng thành viên nam:", countNam);
console.log("Số lượng thành viên nữ:", countNu);
console.log(doTuoi);
