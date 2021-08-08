const name = 'samim';

function reverseName(name) {
	console.log(name);
	//console.log(name.split('').reverse());
	//return name.split('').reverse();

	return name.split('').reverse().join('');
}

//reverseName(name);
console.log(reverseName(name));