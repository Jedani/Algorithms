function canConstruct(target, wordbank) {
	const table = Array(target.length + 1).fill(false);
	table[0] = true;

	for (let i = 0; i <= target.length; i++) {
		if (table[i] == true) {
			for (let word of wordbank) {
				if (target.slice(i, i + word.length) === word) {
					table[i + word.length] = true;
				}
			}
		}
	}
	console.log(table);

	return table[target.length];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
