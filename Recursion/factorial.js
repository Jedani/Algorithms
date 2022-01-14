function factorial(num, prod = 1) {
	if (num === 1) {
		return prod;
	}

	return factorial(num - 1, prod * num);
}

let output = factorial(4);
console.log(output);
//-> 24
