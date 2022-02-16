var coinChange = function (coins, amount) {
	if (0 == amount) {
		return 0;
	}

	var memo = new Array(amount + 1).fill(Infinity);

	const coinTake = (remain) => {
		if (remain < 0) return -1;
		if (remain == 0) return 0;
		if (memo[remain] != Infinity) return memo[remain];

		for (let i = 0; i < coins.length; i++) {
			let took = coinTake(remain - coins[i]);
			if (took >= 0) {
				memo[remain] = Math.min(took + 1, memo[remain]);
			}
		}
		if (memo[remain] == Infinity) memo[remain] = -1;

		return memo[remain];
	};

	return coinTake(amount);
};

// OR

var coinChange = function (coins, amount) {
	let dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 1; i <= amount; i++) {
		for (let j = 0; j < coins.length; j++) {
			if (coins[j] > i) continue;
			dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));
