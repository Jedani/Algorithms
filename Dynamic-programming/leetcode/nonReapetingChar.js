const firstUniqChar = function (s) {
	let temp = [];
	let store = new Map();
	for (const letter of s) {
		store.set(letter, (store.get(letter) || 0) + 1);
	}
	store.forEach(function (value, key) {
		if (value == 1) {
			temp.push(key);
		}
	});
	let a = s.indexOf(temp[0]);
	return a;
};

console.log(firstUniqChar("leetcode"));
