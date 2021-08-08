const products = [
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
function showProductInfo(products) {
	
	let singleProduct = '';

	//for of loop
	//for (let product of products) {
	//	console.log(product);
	//}

	for (let product of products) {
		console.log(product);
		singleProduct += `
			ProductName-${product.ProductName}
			ProductPrice-${product.ProductPrice}
			Quantity-${product.ProductQuantity}
			isAvailable-${product.ProductIsAvailable}
		`;
	}

	//for each Loop
	//products.forEach(function(product){
	//	singleProduct += `
	//		ProductName-${product.ProductName}
	//		ProductPrice-${product.ProductPrice}
	//		Quantity-${product.ProductQuantity}
	//		isAvailable-${product.ProductIsAvailable}
	//	`;
	//})

	//console.log(product);

	//const [product1, product2] = product;
	//console.log(product1);
	//console.log(product2);
	//return `
	//	ProductName-${product1.ProductName}
	//	ProductPrice-${product1.ProductPrice}
	//	Quantity-${product1.ProductQuantity}
	//	isAvailable-${product1.ProductIsAvailable}
	//`;

	return singleProduct;
}

const productOut = showProductInfo(products);

console.log(productOut);
