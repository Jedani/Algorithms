const firstUniqChar = function (s) {
	let store = {};
	for (const letter of s) {
		if (store[letter]) {
			store[letter]++;
		} else {
			store[letter] = 1;
		}
	}
	let a = Object.keys(store).find((key) => store[key] === 1);
	return s.indexOf(a);
};

console.log(firstUniqChar("leetcode"));
