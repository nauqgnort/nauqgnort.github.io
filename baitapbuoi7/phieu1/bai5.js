const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

const differentElements = [];

arr1.forEach(curr => {
  if (!arr2.includes(curr)) {
    differentElements.push(curr);
  }
});

arr2.forEach(curr => {
  if (!arr1.includes(curr)) {
    differentElements.push(curr);
  }
});

console.log("Các phần tử khác nhau giữa hai mảng là:", differentElements);
