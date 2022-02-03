var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	let store = new Map();
	let check = new Map();

	for (let char of s) {
		store.set(char, (store.get(char) || 0) + 1);
	}
	for (let letter of t) {
		check.set(letter, (check.get(letter) || 0) + 1);
	}

	for (let [key, val] of store) {
		let testVal = check.get(key);
		if (store.size !== check.size) {
			return false;
		}
		if (
			JSON.stringify(testVal) !== JSON.stringify(val) ||
			(testVal === undefined && !check.has(key))
		) {
			return false;
		}
	}
	return true;
};

console.log(isAnagram("a", "ab"));
