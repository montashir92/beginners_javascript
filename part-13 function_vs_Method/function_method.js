//Funstion vs Method

const ProductInfo1 = {
	ProductName: 'potato',
	ProductPrice: 30,
	ProductQuantity: 3,
	ProductIsAvailable: true,
	showProductInfo: function(){
		//console.log(ProductInfo1);
		//Always 'this' use is Better
		return `                    
			ProductName- ${this.ProductName}
			ProductPrice- ${this.ProductPrice}
			ProductQuantity- ${this.ProductQuantity}
			ProductAvailable- ${this.ProductIsAvailable}
		`;

		//return `
		//	ProductName- ${ProductInfo1.ProductName}
		//	ProductPrice- ${ProductInfo1.ProductPrice}
		//	ProductQuantity- ${ProductInfo1.ProductQuantity}
		//	ProductAvailable- ${ProductInfo1.ProductIsAvailable}
		//`;
	}
}


console.log(ProductInfo1.showProductInfo());

//function showProductInfo(product) {
//	console.log(product);
//	return 'something.......';
//}

//console.log(showProductInfo(ProductInfo1));