

function sum(num1, ...restValue) {
	console.log(num1, restValue);

	return restValue.reduce((acc, cur) => {
		return acc + cur;
	}, num1)
}

console.log(sum(1, 2, 3));

 