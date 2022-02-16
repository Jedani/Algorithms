var longestCommonSubsequence = function (text1, text2) {
	const row = text1.length,
		col = text2.length;
	const dp = Array.from({ length: row + 1 }, () => new Uint16Array(col + 1));

	for (let i = 1; i <= row; i++) {
		for (let j = 1; j <= col; j++) {
			if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
			else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
		}
	}

	return dp[row][col];
};

var longestCommonSubsequence = function (text1, text2) {
	const lcs = (i, j, memo) => {
		const key = `${i}#${j}`;
		if (memo.has(key)) return memo.get(key);

		let result;

		if (i >= text1.length || j >= text2.length) return 0;
		else if (text1[i] === text2[j]) result = lcs(i + 1, j + 1, memo) + 1;
		else result = Math.max(lcs(i + 1, j, memo), lcs(i, j + 1, memo));

		memo.set(key, result);
		return result;
	};

	return lcs(0, 0, new Map());
};
