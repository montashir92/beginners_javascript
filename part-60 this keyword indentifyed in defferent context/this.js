//1) this indicate window (global scope)
console.log(this)


//2) this indicate parent object, if you a declear inside method
const product = {	
	productName: 'Wheat',
	productPrice: 50,
	productQuantity: 6,
	productIsAvailable: false,
	showProductInfo (){
		function innerFunc(greet) {
			console.log(greet);

			//tis indicate obj
			console.log(this);
		}
		innerFunc.apply(product,['Hello']);
		innerFunc.call(product, 'Hello');
		console.log(this);
		return `
			${this.productName} - ${this.productPrice} - ${this.productQuantity} - ${this.productIsAvailable}
		` 
	}
}

console.log(product.showProductInfo());
const demoProduct = product.showProductInfo;
//this indicate window
console.log(demoProduct.call(product));

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

//4) this indicate window obj in not strict mode but undefined strict mode
function sampleFunc() {
	console.log(this);
}
sampleFunc();

//solution this is defined by how you call the function