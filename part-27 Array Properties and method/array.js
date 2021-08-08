
const arr = ['I', 'love', 'JavaScript'];

//finding length
console.log(arr.length);

//accessing specific element
console.log(arr[0]);

//adding or removing element at the end of the array
console.log(arr.push('Programming'));
console.log(arr);

console.log(arr.pop('Programming'));

//adding or removing element at the beginning of the array
console.log(arr.unshift('We'));
console.log(arr.shift('We'));

//Accessing specific part of array

console.log(arr.slice(1,3));
console.log(arr.splice(0,2));

//concat
console.log(arr.concat(['!']));

//emptying array
arr.length = 0;

console.log(arr);