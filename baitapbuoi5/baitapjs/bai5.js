function fibonacci(n) {
    let fibArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
    console.log("Các số Fibonacci đầu tiên là:");
    for (let i = 0; i < n; i++) {
        console.log(fibArray[i]);
    }
}
const n = 10;
fibonacci(n);
