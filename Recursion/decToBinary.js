function decToBinary(decimal, result) {
	if (decimal == 0) {
		return result;
	}
	result = (decimal % 2) + result;

	return decToBinary(Math.floor(decimal / 2), result);
}

console.log(decToBinary(100, ""));

// console.log(decToBinary(1, ""));
// console.log(decToBinary(233, ""));
