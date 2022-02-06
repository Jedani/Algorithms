var wordBreak = function (s, wordDict, memo = {}) {
	if (s in memo) return memo[s];
	if (s == "") return true;

	for (let word of wordDict) {
		if (s.indexOf(word) == 0) {
			const suffix = s.slice(word.length);
			if (wordBreak(suffix, wordDict, memo) == true) {
				memo[s] = true;
				return true;
			}
		}
	}
	memo[s] = false;

	return false;
};

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
