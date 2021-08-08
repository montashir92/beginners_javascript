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

const arr1 = ['I', 'love', 'JavaScript'];
const arr2 = ['We', 'love', 'Web Development'];


//const [index1, index2, index3] = arr1;
const [index1, ...restValue] = arr1;
console.log(index1,restValue);

const product = {
	productName: 'banana',
	productPrice: 30,
	productQuantity: 3,
	productIsAvailable: true
}

const {productName, ...restObjValue} = product
console.log(productName,restObjValue);
