

const nums = [10, 20, 30];

//const sum = nums.reduce((accumulator, currentValue) => {
//	return accumulator + currentValue;
//});

const sum = nums.reduce(
	(accumulator, currentValue) => accumulator + currentValue
	);

console.log(sum);