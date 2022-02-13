class NumMatrix {
	constructor(matrix) {
		this.matrix = matrix;
	}

	boxMaker() {
		const rows = matt.length,
			cols = matt[0].length;
		const sums = Array.from(matt, (row) => Array.from(row));

		// calc prefix sums
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				sums[row][col] +=
					(sums[row][col - 1] ?? 0) + // left sum
					(sums[row - 1]?.[col] ?? 0) - // top sum
					(sums[row - 1]?.[col - 1] ?? 0); // diagonal sum
			}
		}
		this.matrix = sums;
	}

	sumRegion(row1, col1, row2, col2) {
		let matrix = this.matrix;
		let res = matrix[row2][col2];

		if (row1 > 0) res -= matrix[row1 - 1][col2];
		if (col1 > 0) res -= matrix[row2][col1 - 1];
		if (row1 > 0 && col1 > 0) res += matrix[row1 - 1][col1 - 1];

		return res;
	}
}

let matt = [
	[3, 0, 1, 4, 2],
	[5, 6, 3, 2, 1],
	[1, 2, 0, 1, 5],
	[4, 1, 0, 1, 7],
	[1, 0, 3, 0, 5],
];
let mat = new NumMatrix();
mat.boxMaker(matt);
console.log(mat.sumRegion(2, 1, 4, 3));
console.log(mat.sumRegion(1, 1, 2, 2));
console.log(mat.sumRegion(1, 2, 2, 4));
