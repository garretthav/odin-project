const leapYears = function(year) {
	let isLeapYear = false;

	if (year % 100 === 0) {
		if (year % 400 === 0) {
			isLeapYear = true;
		}
	} else if (year % 4 === 0) {
		isLeapYear = true;
	}
	return isLeapYear;
};

module.exports = leapYears;
