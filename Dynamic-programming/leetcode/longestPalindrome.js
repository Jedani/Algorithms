var longestPalindrome = function (s) {
	if (s.length < 1) return s;
	let hasher = "#";
	for (let ch of s) {
		hasher += ch;
		hasher += "#";
	}

	let tracker = Array(hasher.length).fill(0);

	let center = 0,
		rightBound = 0;

	for (let i = 0; i < hasher.length; i++) {
		let mirror = center - (i - center);

		if (i < rightBound) tracker[i] = Math.min(rightBound - i, tracker[mirror]);

		let right = i + (tracker[i] + 1);
		let left = i - (tracker[i] + 1);

		while (
			right < hasher.length &&
			left >= 0 &&
			hasher[left] === hasher[right]
		) {
			tracker[i]++;
			right++;
			left--;
		}
		if (i + tracker[i] > rightBound) {
			center = i;
			rightBound = i + tracker[i];
		}
	}

	let len = Math.max(...tracker);
	let ind = tracker.indexOf(len);
	return hasher
		.substring([ind - len + 1], ind + len)
		.split("#")
		.join("");
};

console.log(longestPalindrome("bbbab"));
