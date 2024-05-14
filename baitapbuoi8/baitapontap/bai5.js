const mang = [-1, 1, 2, 3, 4, 5];

const coSoAm = mang.some(function(phantu) {
    return phantu < 0;
});

if (coSoAm) {
    console.log("Có số âm trong mảng.");
} else {
    console.log("Không có số âm nào trong mảng.");
}
 