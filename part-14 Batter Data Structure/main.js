//Better Data Structure


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

	const [product1, product2] = product;
	console.log(product1);
	console.log(product2);
	return `
		ProductName-${product1.ProductName}
		ProductPrice-${product1.ProductPrice}
		Quantity-${product1.ProductQuantity}
		isAvailable-${product1.ProductIsAvailable}
	`;
}

const productOut = showProductInfo(product);

console.log(productOut);



