//Spread Operator

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


//..Spread Operator is used in copying array object or part of the array, object

const arr1 = ['I', 'love', 'JavaScript'];
const arr2 = ['We', 'love', 'Web Development'];
//const arr3 = arr1.concat(arr2);

const arr3 = [...arr1, 'and', ...arr2];

console.log(arr3);

const product = {
	productName: 'banana',
	productPrice: 30,
	productQuantity: 3,
	productisAvailable: true
}

const updateProduct = {
	...product,
	updatedKey: 'value'
}

console.log(updateProduct);
