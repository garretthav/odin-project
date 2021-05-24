const removeFromArray = function() {
	let args = [ ...arguments ];
	let arr = args[0];

	for (i = 1; i < args.length; i++) {
		if (arr.indexOf(args[i]) > -1) {
			let index = arr.indexOf(args[i]);
			arr.splice(index, 1);
		}
	}
	return arr;
};

module.exports = removeFromArray;
