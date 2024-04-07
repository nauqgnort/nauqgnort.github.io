function reverseNumber(n) {
    let str = n.toString();
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    let reversedNumber = parseInt(reversedStr);
    console.log("Số đảo ngược của", n, "là:", reversedNumber);
}
const n = 1234;
reverseNumber(n);
