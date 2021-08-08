//insertting Array item by index
const arr = ['I', 'love', 'JavaScript'];


//console.log(arr.slice(0, 2));
//console.log(arr.splice(0, 2));
//console.log(arr.splice(0, 2, 'We', 'love'));

console.log(arr.slice(1));

const newArray = ["We", ...arr.slice(1)]

//... Spread Operator

console.log(newArray);

//console.log(arr);