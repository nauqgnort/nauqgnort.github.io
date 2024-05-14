function sum(...rest) {
    return rest.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3));