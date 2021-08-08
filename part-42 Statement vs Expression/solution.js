
function sum(arr) {
	let sum = 0;
	if(!Array.isArray(arr)) return 'Please Provide A Array';
	for (let num of arr) {
		sum += num;
		//return sum;
	}
	return sum;
}

const arr = [1, 2, 3];
console.log(sum(arr));