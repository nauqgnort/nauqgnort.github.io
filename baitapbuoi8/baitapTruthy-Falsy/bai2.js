function isTruthy(value) {
    return !!value;
}

console.log(isTruthy(false)); // false
console.log(isTruthy(0)); // false
console.log(isTruthy('')); // false
console.log(isTruthy(null)); // false
console.log(isTruthy(undefined)); // false
