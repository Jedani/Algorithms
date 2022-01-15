function summer(value) {
	if (value <= 1) {
		return value;
	}
	return summer(value - 1) + value;
}
console.log(summer(3));
