//Rest Operator

//insertting Array item by index
//const arr = ['I', 'love', 'JavaScript'];


//console.log(arr.slice(0, 2));
//console.log(arr.splice(0, 2));
//console.log(arr.splice(0, 2, 'We', 'love'));

//console.log(arr.slice(1));

//const newArray = ["We", ...arr.slice(1)]

//... Spread Operator

//console.log(newArray);

//console.log(arr);


//...Spread Operator is used in copying array object or part of the array, object

const arr = ['I', 'love', 'JavaScript', 'Programming'];


//for (let i = 0; i < arr1.length; i++) {
//	console.log(arr1[i]);
//}


arr.forEach(function(el){
	console.log(el);
});

//for of loop. most of the time use
for (let el of arr) {
	console.log(el);
}

const obj = {
	productName: 'banana',
	productPrice: 30,
	productQuantity: 3,
	productIsAvailable: true
}

//for in loop (you can use for in loop incase of array but not recommended)
for (let el in obj) {
	console.log(obj[el]);
}


console.log(arr);