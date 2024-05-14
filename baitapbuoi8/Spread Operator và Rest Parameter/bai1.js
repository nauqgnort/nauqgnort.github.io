function mergeParams(param1, param2) {
    return [...param1, ...param2];
}

const result = mergeParams([1, 2, 3], ['a', 'b', 'c']);
console.log(result);