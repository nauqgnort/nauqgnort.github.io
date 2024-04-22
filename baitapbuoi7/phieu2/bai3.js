let array = new Array(100).fill(0);
array = array.map((value, index) => index);
let numbersDivisibleBy5 = array.filter(value => value % 5 === 0);
let sumOfRemainingNumbers = array.reduce((acc, currentValue) => acc + currentValue, 0);

console.log("Mảng mới:", array);
console.log("Các số chia hết cho 5:", numbersDivisibleBy5);
console.log("Tổng của các số còn lại:", sumOfRemainingNumbers);
