
//Pass by Value vs Pass by Reference

const a = 10;

function passByValue(a) {
	const b = a;

	console.log(b);
}

passByValue(a);

const aObj = {
	num: 10
}

function passByReference(aObj) {
	console.log(aObj);

	const bObj = aObj;
	console.log(bObj);
	bObj.num = 20;
	console.log(bObj);
}
console.log(aObj);


passByReference(aObj);