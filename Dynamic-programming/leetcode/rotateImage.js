var rotate = function (matrix) {
	let n = matrix.length;

	// tranpose the matrix first

	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	// rotate the transposed matrix
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n / 2; j++) {
			let temp = matrix[i][j];
			matrix[i][j] = matrix[i][n - 1 - j];
			matrix[i][n - 1 - j] = temp;
		}
	}
	return matrix;
};

console.log(
	rotate([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
);
