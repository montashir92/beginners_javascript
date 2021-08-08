

function sum(num1, num2, num3) {
	let total = 0;
	//arguments are array like structure consists of values passed to the function
	console.log(...arguments);
	//for (let num of arguments) {
	//	console.log(num);
	//	total += num;
	//}
	//const total = arguments.reduce((acc, cur) => acc + cur);

	//converting argument in real array
	const argsArr = Array.from(arguments)
	const total = argsArr.reduce((acc, cur) => acc + cur)
	return total;
}

console.log(sum(1, 2, 3));