const ftoc = function(temp) {
	let tempC = (temp - 32) * (5 / 9);
	return Math.round(tempC * 10) / 10;
};

const ctof = function(temp) {
	let tempF = temp * (9 / 5) + 32;
	return Math.round(tempF * 10) / 10;
};

module.exports = {
	ftoc,
	ctof
};
