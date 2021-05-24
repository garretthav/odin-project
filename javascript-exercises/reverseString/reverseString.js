const reverseString = function(str) {
	let array = str.split('');
	let reversedArray = [];

	for (i = 0; i < array.length; i++) {
		reversedArray.unshift(array[i]);
	}

	return reversedArray.join('');
};

module.exports = reverseString;
