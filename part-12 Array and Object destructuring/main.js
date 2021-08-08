//Array and Object destructuring


//Primitives
//=====================================
//String - anything wrapped in quotation '' or ""
//number - any number with or without decimal value


//const productInfo = ['potato', 30, 3, true];

//console.log(productInfo[0]);
//console.log(productInfo[3]);

//object key value pair

const ProductInfoObject = {
	ProductName: 'potato',
	ProductPrice: 30,
	ProductQuantity: 3,
	ProductIsAvailable: true
}

//const {ProductName, ProductPrice, ProductQuantity, ProductIsAvailable} = ProductInfoObject;
//console.log(ProductName);

const ProductInfoObject2 = {
	ProductName: 'Bannana',
	ProductPrice: 50,
	ProductQuantity: 30,
	ProductIsAvailable: false
}
//Accessing properties


//function showProductInfo(productObjet) {
function showProductInfo({ProductName, ProductPrice, ProductQuantity, ProductIsAvailable}) {
	//console.log(productObjet);

	//const {ProductName, ProductPrice, ProductQuantity, ProductIsAvailable} = productObjet;
	
	return `
		ProductName - ${ProductName}
		ProductPrice - ${ProductPrice}
		Quantity - ${ProductQuantity}
		isAvailable - ${ProductIsAvailable}
	`;
}

const product1 = showProductInfo(ProductInfoObject);
const product2 = showProductInfo(ProductInfoObject2);

console.log(product1);
console.log(product2);



const productInfoArr = ['potato', 40, 3, true];
const [productName, productPrice,, producIsAvailable] = productInfoArr;
console.log(productName, productPrice, producIsAvailable);
//console.log(productInfoArr[0]);
//console.log(productInfoArr[3]);
