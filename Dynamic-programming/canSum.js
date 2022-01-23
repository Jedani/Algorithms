const canSum = (target, array, memo = {}) => {
	if (target in memo) return memo[target];
	if (target == 0) {
		return true;
	}
	if (target < 0) return false;

	for (let num of array) {
		const rem = target - num;
		if (canSum(rem, array, memo) == true) {
			memo[target] = true;
			return true;
		}
	}

	memo[target] = false;
	return false;
};

console.log(canSum(3000, [7, 14]));
