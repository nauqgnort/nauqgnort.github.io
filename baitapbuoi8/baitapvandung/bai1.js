function countCharacterOccurrences(str) {
    const charCount = {};
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    return charCount;
}

const result = countCharacterOccurrences("xin chao cac ban");
console.log(result);
