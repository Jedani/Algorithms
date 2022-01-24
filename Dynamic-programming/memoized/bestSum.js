const bestSum = (target, array, memo = {}) => {
	if (target in memo) return memo[target];
	if (target == 0) return [];
	if (target < 0) return null;

	let shortCompilation = null;

	for (let num of array) {
		const rem = target - num;
		const res = bestSum(rem, array, memo);

		if (res !== null) {
			const comp = [...res, num];

			if (shortCompilation == null || comp.length < shortCompilation.length) {
				shortCompilation = comp;
			}
		}
	}
	memo[target] = shortCompilation;
	return shortCompilation;
};

console.log(bestSum(100, [3, 4, 7, 25, 2]));
