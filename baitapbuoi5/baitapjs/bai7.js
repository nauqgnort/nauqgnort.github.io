const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPerfectNumber(n) {
    if (n <= 0) {
        return false;
    }

    let sumOfDivisors = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) { 
            sumOfDivisors += i; 
        }
    }

    return sumOfDivisors === n;
}

function main() {
    rl.question("Nhập một số nguyên dương n:", function(answer) {
        const n = parseInt(answer);
        if (isPerfectNumber(n)) {
            console.log(`${n} là số hoàn hảo.`);
        } else {
            console.log(`${n} không phải là số hoàn hảo.`);
        }
        rl.close();
    });
}

main();
