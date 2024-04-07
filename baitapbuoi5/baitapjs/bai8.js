const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateS(n) {
    let S = 1;
    for (let i = 2; i <= n; i++) {
        S += 1 / Math.pow(i, 3);
    }
    return S.toFixed(3)
}

function main() {
    rl.question("Nhập một số nguyên dương n: ", function(answer) {
        const n = parseInt(answer);
        const result = calculateS(n);
        console.log(`Kết quả của biểu thức S là: ${result}`);
        rl.close();
    });
}

main();
