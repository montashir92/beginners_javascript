
//const product = {
//	productName: 'Wheat',
//	productPrice: 50,
//	productQuantity: 6,
//	productIsAvailable: false
//}

//Factory Function
//function showProductInfo(productName, productPrice, productQuantity, productIsAvailable) {
//	return {
		//productName: productName,
		//productPrice: productPrice,
		//productQuantity: productQuantity,
		//productIsAvailable: productIsAvailable

//		productName,
//		productPrice,
//		productQuantity,
//		productIsAvailable
//	}
//}

//console.log(showProductInfo('Wheat', 50, 6, false));

//Constructor Function

function Product(productName, productPrice, productQuantity, productIsAvailable) {
	//this indicate object created after calling of constructor function
	this.productName = productName;
	this.productPrice = productPrice;
	this.productQuantity = productQuantity;
	this.productIsAvailable = productIsAvailable;
}

const product = new Product('Wheat', 60, 6, true);

console.log(product);