//All Primitive - compare by value

const a = 10;
const b = 10;

console.log(a === b);

//All Complex Data type/object data type/reference data type compare by Reference (Memory Location)
const aObj = {a: 10}
const bObj = {b: 10}
console.log(aObj.a === bObj.b);

console.log(aObj === bObj);

const aArray = ['10'];
const bArray = ['10'];
//console.log(aArray === bArray);
console.log(aArray[0] === bArray[0]);