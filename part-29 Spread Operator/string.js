
const text = 'I love Javascript Programming';

//remove space
//const text = '   I love Javascript Programming  ';

//finding length
console.log(text.length);

//finding character/element
console.log(text[0]);

//finding character by index
console.log(text.charAt(5));

//finding index by character
console.log(text.indexOf('o'));

//uppercase
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//check whether text is include or not
console.log(text.includes('love'));

//remove space
console.log(text.trimStart().length);
console.log(text.trimEnd().length);
console.log(text.trim());

//pulling out text
console.log(text.slice(0, 6));
console.log(text.substr(0, 6));

//concat
console.log(text.concat('!'));

//Converting/creating Array from a string
console.log(text.split(' '));