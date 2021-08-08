//JavaScript first class function
//define function as variable reference
//function as return value
//function as input argument

//const func = function () {
//	console.log('output');
//}
//func();

//function outerFunc() {
//	return function innerFunc() {
//		console.log('Inner Function output');
//	}
//}

//outerFunc()();


function outerFunc(innerFunc) {
	console.log(innerFunc());
	
}

outerFunc(function () {
	console.log('Inner funcion to be call back function');
});