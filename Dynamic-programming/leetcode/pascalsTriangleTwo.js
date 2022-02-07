var getRow = function (rowIndex) {
	let result = [];
	result.push([1]);
	for (let i = 0; i < rowIndex; i++) {
		let prev = result[i];
		let next = [];
		next.push(1);
		for (let j = 1; j < prev.length; j++) {
			next.push(prev[j - 1] + prev[j]);
		}
		next.push(1);
		result.push(next);
	}
	return result[rowIndex];
};

console.log(getRow(3));
