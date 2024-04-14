function reverseString(str) {
    return str.split("").reverse().join("");
}

let inputString = "Hello";
let reversedString = reverseString(inputString);
console.log(reversedString);
