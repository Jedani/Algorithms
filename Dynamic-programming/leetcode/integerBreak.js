const integerBreak = function (n) {
	const memo = {};
	const dp = (m) => {
		if (memo[m]) return memo[m];
		let result = 1;
		for (let i = 2; i < m; i++)
			result = Math.max(result, dp(m - i) * i, (m - i) * i);
		memo[m] = result;
		return result;
	};
	return dp(n);
};

// OR

const integerBreak = function (n) {
	const dp = [];

	for (let i = 1; i <= n; i++) {
		dp[i] = 1;
		for (let j = 1; j < i; j++)
			dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
	}

	return dp[n];
};

console.log(integerBreak(10));
