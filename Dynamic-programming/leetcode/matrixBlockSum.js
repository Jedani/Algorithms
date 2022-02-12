function matrixBlockSum(mat, k) {
	const rows = mat.length,
		cols = mat[0].length;
	const sums = Array.from(mat, (row) => Array.from(row));

	// calc prefix sums
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			sums[row][col] +=
				(sums[row][col - 1] ?? 0) + // left sum
				(sums[row - 1]?.[col] ?? 0) - // top sum
				(sums[row - 1]?.[col - 1] ?? 0); // diagonal sum
		}
	}
	const answer = Array.from(mat, () => new Array(cols).fill(0));

	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			const top = row - k - 1,
				left = col - k - 1,
				right = Math.min(cols - 1, col + k),
				bottom = Math.min(rows - 1, row + k);

			answer[row][col] = sums[bottom][right];
			if (top >= 0) {
				answer[row][col] -= sums[top][right];
			}
			if (left >= 0) {
				answer[row][col] -= sums[bottom][left];
			}
			if (top >= 0 && left >= 0) {
				answer[row][col] += sums[top][left];
			}
		}
	}

	return answer;
}

console.log(
	matrixBlockSum(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		1,
	),
);
