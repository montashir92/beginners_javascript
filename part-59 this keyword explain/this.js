//1) this indicate window (global scope)
console.log(this)


//2) this indicate parent object, if you a declear inside method
const product = {	
	productName: 'Wheat',
	productPrice: 50,
	productQuantity: 6,
	productIsAvailable: false,
	showProductInfo (){
		return `
			${this.productName} - ${this.productPrice} - ${this.productQuantity} - ${this.productIsAvailable}
		` 
	}
}

console.log(product.showProductInfo());

//3) this indicate object create based on constructor function
function Product(productName, productPrice, productQuantity, productIsAvailable) {
	
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

const product1 = new Product('Wheat', 60, 6, true);
console.log(product1);