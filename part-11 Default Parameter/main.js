//Default Parameter
//Function


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

const ProductInfoObject2 = {
	ProductName: 'Bannana',
	ProductPrice: 50,
	ProductQuantity: 30,
	ProductIsAvailable: false
}
//Accessing properties


function showProductInfo(productObjet, productName = 'product2') {
	console.log(productName);
	return `${productName} - 
		ProductName - ${productObjet.ProductName}
		ProductPrice - ${productObjet.ProductPrice}
		Quantity - ${productObjet.ProductQuantity}
		isAvailable - ${productObjet.ProductIsAvailable}
	`;
}

//showProductInfo(ProductInfoObject);
const product1 = showProductInfo(ProductInfoObject, 'product1');
//const product2 = showProductInfo(ProductInfoObject2, 'product2');
const product2 = showProductInfo(ProductInfoObject2);

console.log(product1);
console.log(product2);



//object(complex data type)
//object
//array
//function

