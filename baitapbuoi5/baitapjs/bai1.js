
function isPrime(n) {
    
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
const numberToCheck =4 ;
if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " là số nguyên tố.");
} else {
    console.log(numberToCheck + " không là số nguyên tố.");
}
