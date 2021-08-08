
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
	//multiple copy
	this.productName = productName;
	this.productPrice = productPrice;
	this.productQuantity = productQuantity;
	this.productIsAvailable = productIsAvailable;
	this.showProductInfo = function() {
		return `
			${this.productName} - ${this.productPrice} - ${this.productQuantity} - ${this.productIsAvailable}
		`
	}
}

//--ptoto--(single-copy)
Product.prototype.showProductInfoProto = function(){
	return `
		${this.productName} - ${this.productPrice} - ${this.productQuantity} - ${this.productIsAvailable}
	` 
}

const product1 = new Product('Wheat', 60, 6, true);
//const product2 = new Product('Bannana', 100, 60, false);
//console.log(product2);

console.log(product1);
console.log(product1.productName);
console.log(product1.showProductInfo());
console.log(product1.showProductInfoProto());