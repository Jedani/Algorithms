var longestPalindromeSubseq = function (s) {
	let table = Array(s.length + 1)
		.fill(null)
		.map(() => Array(s.length + 1).fill(0));

	for (let r = 0; r < s.length; r++) {
		for (let c = 0; c < s.length; c++) {
			if (s[r] === s[s.length - c - 1]) {
				table[r + 1][c + 1] = table[r][c] + 1;
			} else {
				table[r + 1][c + 1] = Math.max(table[r][c + 1], table[r + 1][c]);
			}
		}
	}

	return table[table.length - 1][table.length - 1];
};

console.log(longestPalindromeSubseq("bbbab"));
