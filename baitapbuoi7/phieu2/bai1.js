let arr = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 20 },
    { name: 'name3', age: 15 },
    { name: 'name4', age: 10 },
    { name: 'name4', age: 27 }
  ];
  
  arr.sort((a, b) => b.age - a.age);
  
  console.log(arr);
  