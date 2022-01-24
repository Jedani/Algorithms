const allConstruct = (target, wordbank, memo = {}) => {
	if (target in memo) return memo[target];
	if (target == "") return 1;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
