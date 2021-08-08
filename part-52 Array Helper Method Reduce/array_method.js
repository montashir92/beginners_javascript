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



//filter -array helper method
//(1) works like regular lopping
//(2) Works With Array
//(3) Return a New Array (Based on some condition)
//(4) Don't Mutating(change) the original array

//const filteredArray = arr.filter(function(el){
//	if (el.length > 3) {
//		return el;
//	}
//})

//console.log(filteredArray);

//const filteredArray = arr.filter((el) => el.length > 3 && el)

//console.log(filteredArray);

//const arr = ['I', 'Love', 'JavaScript', 'and', 'Programmimg'];

//solution

//const filteredArray = arr.filter(el => el.includes('va') && el);

//console.log(filteredArray);

//Find -array helper method
//(1) works like regular lopping
//(2) Works With Array
//(3) Return a single value (Based on some condition)
//(4) Don't Mutating(change) the original array

//const findArray = arr.find((el) => el.length > 3 && el)

//console.log(findArray);


//const arr = ['I', 'Love', 'JavaScript', 'and', 'Programmimg'];

//Every -array helper method
//(1) works like regular lopping
//(2) Works With Array
//(3) Return true or false (Based on some condition)
//(4) Don't Mutating(change) the original array

//const resultArr = arr.every(el => {
//	return typeof el === 'string'
//})

//console.log(resultArr);


//Some -array helper method
//(1) works like regular lopping
//(2) Works With Array
//(3) Return true or false (Based on some condition)
//(4) Don't Mutating(change) the original array

//const arr = ['I', 'Love', 'JavaScript', 'and', 'Programmimg'];


//const resultArr = arr.some(el => {
//	return typeof el === 'number'
//})

//console.log(resultArr);

const arr = ['I', 'Love', 'JavaScript', 'and', 'Programmimg'];

//Reduce -array helper method
//(1) works like regular lopping
//(2) Works With Array
//(3) Return Reduced value
//(4) Don't Mutating(change) the original array

/**
const reducedValue = arr.reduce((accumilator, currentValue) => {
	console.log(accumilator, currentValue);
	//return accumilator + currentValue;
	//return accumilator +' '+ ' ' +currentValue;
	return`${accumilator} ${currentValue}`;
});
*/

const reducedValue = arr.reduce((accumilator, currentValue) => {
	console.log(accumilator, currentValue);
	//return accumilator + currentValue;
	//return accumilator +' '+ ' ' +currentValue;
	return`${accumilator} ${currentValue}`;
}, 'we');

console.log(reducedValue);
