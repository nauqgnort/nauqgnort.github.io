let result = [];

let flatten = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      result.push(item);
    }
  }
  return result;
}

let arr = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatten(arr));
