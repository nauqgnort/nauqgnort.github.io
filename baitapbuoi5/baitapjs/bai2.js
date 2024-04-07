
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

function printEvenNumbers(n) {
    console.log("Các số chẵn từ 1 đến", n, "là:");
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}

function printPrimeNumbers(n) {
    console.log("Các số nguyên tố từ 1 đến", n, "là:");
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
const n = 20;
printEvenNumbers(n);
printPrimeNumbers(n);
