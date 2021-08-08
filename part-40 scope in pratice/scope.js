
const a = 10;

//Global Scope
//Local Scope - functional Scope, block scope

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