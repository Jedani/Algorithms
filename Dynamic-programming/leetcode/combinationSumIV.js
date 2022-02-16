var combinationSum4 = function (nums, target) {
	let memo = new Map();
	return dfs(nums, target, memo);
};

function dfs(nums, remaining, memo) {
	let count = 0;

	if (remaining === 0) {
		return 1;
	}

	if (memo.has(remaining)) {
		return memo.get(remaining);
	}

	for (let i = 0; i < nums.length; i++) {
		if (remaining - nums[i] >= 0) {
			count += dfs(nums, remaining - nums[i], memo);
		}
	}
	memo.set(remaining, count);
	return count;
}

// OR

var combinationSum4 = function (nums, target) {
	let numWays = Array(target + 1).fill(0);
	numWays[0] = 1;

	for (let amount = 1; amount < numWays.length; amount++) {
		nums.forEach((number) => {
			const diff = amount - number;

			if (diff >= 0) numWays[amount] += numWays[diff];
		});
	}

	return numWays[numWays.length - 1];
};

console.log(combinationSum4([1, 2, 3], 4));
