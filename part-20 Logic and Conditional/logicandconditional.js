//Logic and Conditional

//if
//else if
//else


const productPrice = 100;

let freeShipping = false;
let handPicked = false;

//if (productPrice <= 500) {
//	console.log('Shipping Free');
//}else{
//	console.log('Shipping Charge');
//}

if (productPrice >= 100) {
	freeShipping = true;
	handPicked = false;
}else if(productPrice >= 60) {
	freeShipping = false;
	handPicked = true;
}else{
	freeShipping = false;
    handPicked = false;
}

console.log(freeShipping);
console.log(handPicked);