const canConstruct = function (ransomNote, magazine) {
	if (ransomNote.length > magazine.length) return false;

	let store = new Map();

	for (let char of magazine) {
		store.set(char, (store.get(char) || 0) + 1);
	}

	for (let letter of ransomNote) {
		let count = store.get(letter);
		if (!count) return false;

		store.set(letter, --count);
	}
	return true;
};

console.log(canConstruct("aa", "ab"));
