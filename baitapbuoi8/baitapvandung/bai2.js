function lengthOfLongestSubstring(s) {
    const seen = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        seen.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

const input = "bbbbb";
const result = lengthOfLongestSubstring(input);
console.log(result);