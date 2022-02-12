var minFallingPathSum = function (matrix) {
	const rows = matrix.length;
	if (!rows) return 0;
	const cols = matrix[0].length;
	let minSum;

	for (let i = rows - 1; i >= 0; i--) {
		for (let j = 0; j < cols; j++) {
			if (i !== rows - 1) {
				// if it's not the last row, we can get the direct min failling sum
				const bottom = matrix[i + 1][j];
				const bottomRight = j !== cols - 1 ? matrix[i + 1][j + 1] : Infinity;
				const bottomLeft = j !== 0 ? matrix[i + 1][j - 1] : Infinity;
				matrix[i][j] += Math.min(bottom, Math.min(bottomLeft, bottomRight));
			}
			if (i === 0) {
				// when the loop reaches to the top row, get the minimum path sum from direct row below
				minSum = Math.min(
					minSum === undefined ? Infinity : minSum,
					matrix[i][j],
				);
			}
		}
	}

	return minSum === undefined ? 0 : minSum;
};

console.log(
	minFallingPathSum([
		[2, 1, 3],
		[6, 5, 4],
		[7, 8, 9],
	]),
);
