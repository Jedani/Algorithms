const allConstruct = (target, wordbank) => {
	const table = Array(target.length + 1)
		.fill()
		.map(() => []);

	table[0] = [[]];

	for (let i = 0; i <= target.length; i++) {
		for (let word of wordbank) {
			if (target.slice(i, i + word.length) == word) {
				const newComb = table[i].map((subArray) => [...subArray, word]);
				table[i + word.length].push(...newComb);
			}
		}
	}
	return table[target.length];
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
	allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]),
);
