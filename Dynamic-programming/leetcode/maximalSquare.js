var maximalSquare = function (matrix) {
	const table = Array(matrix[0] + 1).fill(0);
	let max = Math.max(...matrix[0]),
		prev = 0;

	for (let row = 1; row <= matrix.length; row++) {
		for (let col = 1; col <= matrix[0].length; col++) {
			let temp = table[col];
			if (matrix[row - 1][col - 1] === "1") {
				table[col] = Math.min(prev, table[col - 1], table[col]) + 1;
				max = Math.max(table[col], max);
			} else {
				table[col] = 0;
			}
			prev = temp;
		}
	}
	return Math.pow(max, 2);
};

console.log(
	maximalSquare([
		[
			["1", "1"],
			["1", "1"],
		],
	]),
);
