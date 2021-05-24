function add (x,y) {
	return x+y;
}

function subtract (x,y) {
	return x-y;
}

function sum (arr) {
	let sum = 0;
	for(i=0; i<arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function multiply (arr) {
	let product = 1;
	for(i=0; i<arr.length; i++) {
		product *= arr[i];
	}
	return product;
}

function power(x,y) {
	return x**y;
}

function factorial(x) {
	let factorial = 1;
	for(i=x; i>0; i--) {
		factorial *= i;
	}
	return factorial;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}