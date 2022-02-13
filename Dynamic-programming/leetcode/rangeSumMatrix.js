var NumMatrix = function (matrix) {
	let n = matrix.length;
	if (n == 0) return;
	let m = matrix[0].length;

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			let sum = 0;
			if (i > 0) sum += matrix[i - 1][j];
			if (j > 0) sum += matrix[i][j - 1];
			if (i > 0 && j > 0) sum -= matrix[i - 1][j - 1];
			matrix[i][j] += sum;
		}
	}
	this.matrix = matrix;
};
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	let matrix = this.matrix;
	let res = matrix[row2][col2];

	if (row1 > 0) res -= matrix[row1 - 1][col2];
	if (col1 > 0) res -= matrix[row2][col1 - 1];
	if (row1 > 0 && col1 > 0) res += matrix[row1 - 1][col1 - 1];

	return res;
};

let numMatrix = new NumMatrix([
	[3, 0, 1, 4, 2],
	[5, 6, 3, 2, 1],
	[1, 2, 0, 1, 5],
	[4, 1, 0, 1, 7],
	[1, 0, 3, 0, 5],
]);

console.log(numMatrix);
