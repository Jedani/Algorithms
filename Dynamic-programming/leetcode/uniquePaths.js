var uniquePaths = function (m, n, memo = {}) {
	const key = m + "," + n;

	if (key in memo) {
		return memo[key];
	}

	if (m == 1 && n == 1) {
		return 1;
	}
	if (m == 0 || n == 0) {
		return 0;
	}

	memo[key] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
	return memo[key];
};

// OR TABULATION
var uniquePaths = function (m, n) {
	const table = Array(m + 1)
		.fill()
		.map(() => Array(n + 1).fill(0));

	table[1][1] = 1;

	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			const current = table[i][j];
			if (j + 1 <= n) {
				table[i][j + 1] += current;
			}
			if (i + 1 <= m) {
				table[i + 1][j] += current;
			}
		}
	}
	return table[m][n];
};

// OR MATRIX BLOCKSUM WAY

// var uniquePaths = function (m, n) {
// 	const mat = Array(m)
// 		.fill()
// 		.map(() => Array(n).fill(1));
// 	const rows = mat.length,
// 		cols = mat[0].length;
// 	const sums = Array.from(mat, (row) => Array.from(row));

// 	// calc prefix sums
// 	for (let row = 0; row < rows; row++) {
// 		for (let col = 0; col < cols; col++) {
// 			sums[row][col] +=
// 				(sums[row][col - 1] ?? 0) + // left sum
// 				(sums[row - 1]?.[col] ?? 0) - // top sum
// 				(sums[row - 1]?.[col - 1] ?? 0); // diagonal sum
// 		}
// 	}
// 	return sums[m][n-1];
// };

// console.log(uniquePaths(3, 7));
