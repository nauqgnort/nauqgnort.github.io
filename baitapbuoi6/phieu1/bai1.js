function firstUniqueChar(str) {
    for (let i = 0; i < str.length; i++) {
        let currentChar = str.charAt(i);
        if (str.indexOf(currentChar) === str.lastIndexOf(currentChar)) {
            return i;
        }
    }
    return -1;
}
let str1 = "buitrongquan";
console.log("Output case1:", firstUniqueChar(str1));

let str2 = "xinchaoquan";
console.log("Output case2:", firstUniqueChar(str2));

let str3 = "aabb";
console.log("Output case3:", firstUniqueChar(str3));
