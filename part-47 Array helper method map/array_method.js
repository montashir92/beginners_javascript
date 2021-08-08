//Way of Looping
//simple (plain) for looping
//while loop
//for of loop (array recommended)
//for in loop(object)
//forEach loop

//Array Helper Method
//map
//filter
//find
//every
//some
//reduce

//Map -array helper method
//(1) works like regular lopping
//(2) Works With Array
//(3) Return a New Array (With Modifyed without modifyed element)
//(4) Don't Mutating(change) the original array

const arr = ['I', 'Love', 'JavaScript', 'and', 'Programmimg'];

//arr.map(function(el){
//	console.log(el);
//})

//const mappedArr = arr.map(function(el){
//	return el
//})
//console.log(mappedArr);

//const mappedArr = arr.map(function(el){
//	return el.toUpperCase();
//})
//console.log(mappedArr);

const mappedArr = arr.map(el => el.toUpperCase());
console.log(mappedArr);
console.log(arr);