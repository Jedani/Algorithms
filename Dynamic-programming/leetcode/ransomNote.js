var canConstruct = function (ransomNote, magazine) {
	if (ransomNote.length > magazine.length) return false;

	let magMap = new Map();

	for (let char of magazine) {
		//O(m)
		magMap.set(char, (magMap.get(char) || 0) + 1);
	}

	for (let note of ransomNote) {
		//O(n)
		let counter = magMap.get(note);
		if (!counter) return false;

		magMap.set(note, --counter);
	}
	return true;
};

console.log(canConstruct("aa", "aab"));
