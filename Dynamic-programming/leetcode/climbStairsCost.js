const minCostClimbingStairs = (cost) => {
	function recurse(a, n, memo = {}) {
		if (n in memo) return memo[n];
		if (n >= a.length) {
			return 0;
		}

		let ls = recurse(a, n + 1, memo);
		let rs = recurse(a, n + 2, memo);

		memo[n] = Math.min(ls, rs) + a[n];
		return memo[n];
	}

	return Math.min(recurse(cost, 0), recurse(cost, 1));
};

console.log(minCostClimbingStairs([10, 15, 20]));

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
