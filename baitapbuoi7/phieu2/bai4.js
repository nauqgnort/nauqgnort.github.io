let data = [
    { name: 'name1', count: 13 },
    { name: 'name3', count: 23 },
    { name: 'name1', count: 25 },
    { name: 'name2', count: 27 },
    { name: 'name3', count: 30 },
    { name: 'name2', count: 20 }
];
let countByName = {};

data.forEach(item => {
    if (countByName[item.name]) {
        countByName[item.name] += item.count;
    } else {
        countByName[item.name] = item.count;
    }
});

let result = Object.keys(countByName).map(name => ({
    name: name,
    count: countByName[name]
}));

console.log(result);
