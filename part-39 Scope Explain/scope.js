
//const a = 10;

//function outerFunc() {
//	console.log(a);

//	const b = 5;
//
//	return function innerFunc() {
//		console.log(b);
//	}
//}

//outerFunc()()



//const a = 10;

//console.log(c);
//console.log(b);

//function outerFunc() {
//	console.log(a);
//	//console.log(c); //not working here
//
//	const b = 5;
//
//	return function innerFunc() {
//		const c = 2;
//		console.log(a);
//		console.log(c);
//		console.log(b);
//	}
//}

//outerFunc()()

//let a = 10;
const a = 10;

//console.log(c);
//console.log(b);

function outerFunc() {
	a = 20;
	console.log(a);
	//console.log(c); //not working here

	let b = 5;

	return function innerFunc() {
		b = 10;
		const c = 2;
		console.log(a);
		console.log(c);
		console.log(b);
	}
}

outerFunc()()