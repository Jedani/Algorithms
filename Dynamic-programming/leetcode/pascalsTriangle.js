const generate = (numRows) => {
	let result = [];
	if (numRows == 0) {
		return [];
	}
	result.push([1]);
	for (let i = 1; i < numRows; i++) {
		let prev = result[i - 1];
		let next = [];
		next.push(1);
		for (let j = 1; j < prev.length; j++) {
			next.push(prev[j - 1] + prev[j]);
		}
		next.push(1);
		result.push(next);
	}
	return result;
};

console.log(generate(5));
