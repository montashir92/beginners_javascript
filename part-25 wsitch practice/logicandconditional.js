//Ternary Operator

//if
//else if
//else


const productPrice = 60;

let freeShipping = false;
let handPicked = false;

//if (productPrice <= 500) {
//	console.log('Shipping Free');
//}else{
//	console.log('Shipping Charge');
//}

//if (productPrice >= 100) {
//	freeShipping = true;
//	handPicked = false;
//}else{
//	freeShipping = false;
//    handPicked = false;
//}

switch ( productPrice) {
	case (productPrice >= 100 && productPrice):
		freeShipping = true;
		handPicked = false;
		break;

    case (productPrice >= 60 && productPrice):
		freeShipping = false;
		handPicked = true;
		break;
	default:
		freeShipping = false;
		handPicked = false;
}

//Ternary Operator
freeShipping = productPrice >= 100 ? true : false;
//handPicked = productPrice >= 60 && productPrice < 99 ? true : false;
handPicked = productPrice >= 60 || productPrice < 99 ? true : false;

console.log(freeShipping);
console.log(handPicked);

//Falsey Value
//False
//Undefined
//Null
//'' (empty string)
//NaN
//0
//otherwise all value are truth