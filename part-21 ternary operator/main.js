//Operator

//+ Addition
//- Subtraction
//* Multiplication
//** Exponentiation (ES2016)
/// Division
//% Moudlus (Division Remainder)
//++ Increment
//-- Decrement

const product = [
	{
		ProductName: 'potato',
		ProductPrice: 30,
		ProductQuantity: 3,
		ProductIsAvailable: true
	},
	{
		ProductName: 'Bannana',
		ProductPrice: 50,
		ProductQuantity: 30,
		ProductIsAvailable: false
	}

]




//function showProductInfo(productObjet) {
function showProductInfo(product) {
	
	//console.log(product);
	let singleProduct = '';

	for (let i = 0; i <  product.length; i++) {
		//console.log(i);
	     singleProduct += `
	     	ProductName-${product[i].ProductName}
			ProductPrice-${product[i].ProductPrice}
			Quantity-${product[i].ProductQuantity}
			isAvailable-${product[i].ProductIsAvailable}
	     `;
		console.log(singleProduct);
	}

	console.log(singleProduct);

	return singleProduct;

	return `
		ProductName-${product1.ProductName}
		ProductPrice-${product1.ProductPrice}
		Quantity-${product1.ProductQuantity}
		isAvailable-${product1.ProductIsAvailable}
	`;
}

const productOut = showProductInfo(product);

console.log(productOut);

//loop - to avaid repeated action

//loop has start and end
//for (let i = 0; i < productInfoArr.length; i++) {
	//document.write('Loop='+i+'<br>');
//	console.log(i);
//}

//const productInfoArr = ['potato', 30, 3, true];
//console.log(productInfoArr.length);
//for (let i = 0; i < productInfoArr.length; i++) {
	//document.write('Loop='+i+'<br>');
	//console.log(i);
//	console.log(productInfoArr[i]);
//}

//let i = 0;
//while (i <= 10) {
//	console.log(i);
//	i++;
//}

//let i = 0;

//while (i < productInfoArr.length) {
//	console.log(productInfoArr[i]);
//	i++;
//}



