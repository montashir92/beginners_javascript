
//Statement
//comment
//concatenation
//data type


//var vs let const
//no use var
//Most of the time we will use const
let productName = 'potato';
let productPrice = 30;
const productQuantity = 3;
const productIsAvailable = 'true';

productPrice = 25;

//show all information about a product
//template string
console.log(`
	    ProductName= ${productName}  
		ProductPrice= ${productPrice}  
		Quantuty= ${productQuantity} 
		isAvailable= ${productIsAvailable}
	`);


//symbol example
//const player1Span = Symbol(1);
//const player2Span = Symbol(1);

const player1Span = 1;
const player2Span = 1;

console.log(player1Span === player2Span);


//DataType

//primitives
//=====================================================
//string - anything wrapped in quotation '' or ""
//number - any numnber with or withoutdecimal value
//boolean - true or false
//null - 
//undefined - 
//symbol - 
//bigint - 


//object
//object
//function