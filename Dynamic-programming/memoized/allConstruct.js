const allConstruct = (target, wordbank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target == "") return [[]];
	const result = [];

	for (let word of wordbank) {
		if (target.indexOf(word) == 0) {
			const suffix = target.slice(word.length);
			const suffWays = allConstruct(suffix, wordbank, memo);
			const targetWays = suffWays.map((way) => [word, ...way]);
			result.push(...targetWays);
		}
	}

	memo[target] = result;
	return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
