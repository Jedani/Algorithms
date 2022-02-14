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

console.log(uniquePaths(3, 2));
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
