const countConstruct = (target, wordbank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target == "") return 1;

	let total = 0;

	for (let word of wordbank) {
		if (target.indexOf(word) == 0) {
			const numOfWays = countConstruct(
				target.slice(word.length),
				wordbank,
				memo,
			);
			total += numOfWays;
		}
	}
	memo[target] = total;
	return total;
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
