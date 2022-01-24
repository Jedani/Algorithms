const howSum = (target, array, memo = {}) => {
	if (target in memo) return memo[target];
	if (target == 0) return [];
	if (target < 0) return null;

	for (let num of array) {
		const rem = target - num;
		const res = howSum(rem, array, memo);

		if (res !== null) {
			memo[target] = [...res, num];
			return memo[target];
		}
	}
	memo[target] = null;
	return null;
};

console.log(howSum(7, [3, 4]));
