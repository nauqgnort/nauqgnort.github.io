const arr = [49, 30, 19, 2, 29];

let sum = 0;
let product = 1;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

for (let i = 0; i < arr.length; i++) {
  product *= arr[i];
}

console.log("Tổng của mảng là:", sum);
console.log("Tích của mảng là:", product);
