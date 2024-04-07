const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tính tổng các số từ 1 đến n
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function calculateFactorial(x) {
    if (x === 0 || x === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= x; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

function main() {
    rl.question("Nhập số nguyên dương n để tính tổng các số từ 1 đến n: ", (n) => {
        const sum = calculateSum(parseInt(n));
        console.log(`Tổng các số từ 1 đến ${n} là: ${sum}`);

        rl.question("Nhập số nguyên dương x để tính giai thừa: ", (x) => {
            const factorial = calculateFactorial(parseInt(x));
            console.log(`Giai thừa của ${x} là: ${factorial}`);
            rl.close();
        });
    });
}

main();
