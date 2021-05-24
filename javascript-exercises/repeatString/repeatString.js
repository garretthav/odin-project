const repeatString = function(str, num) {
	let repeatedStr = '';

	if (num < 0) {
		return 'ERROR';
	}

	for (i = 0; i < num; i++) {
		repeatedStr += str;
	}
	return repeatedStr;
};

module.exports = repeatString;
