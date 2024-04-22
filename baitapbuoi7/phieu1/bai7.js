const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];

const countOccurrences = arr => {
  const countMap = {};
  arr.forEach(num => {
    countMap[num] = (countMap[num] || 0) + 1;
  });
  return countMap;
}

const resultUsingMap = countOccurrences(arrCount);
console.log(resultUsingMap);
