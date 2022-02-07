function slider(letters, k) {
	let map = new Map();
	let maxLen = -Infinity;
	let uniqueCharsSeen = new Map(); // could be done with a primitive, but this was easiest
	let windowStart = 0;
	let windowEnd = 0;

	for (let i = 0; i < letters.length; i++) {
		let letter = letters[i];
		// increment windowEnd
		windowEnd++;
		// put letter in map
		map.set(letter, i);
		uniqueCharsSeen.set(letter, i);

		// adjust window when there are more distinct chars than the target
		while (map.size > k) {
			// update left side of window to the last seen index of the first item put in map
			let firstKey = map.keys().next().value;
			windowStart = map.get(firstKey) + 1;
			// remove first char seen from the map
			map.delete(firstKey);
		}

		// update maxLen
		maxLen = Math.max(maxLen, windowEnd - windowStart);
	}

	// when string has less distinct chars than the k that are required
	if (uniqueCharsSeen.size < k) {
		return -Infinity;
	}

	return maxLen;
}

console.log(slider("AAAHHIBC", 3));

// int windowStart = 0, maxLength = 0;
// Map<Character, Integer> charFrequencyMap = new HashMap<>();
// for (int windowEnd = 0; windowEnd < str.length(); windowEnd++) {
//   char rightChar = str.charAt(windowEnd);
//   charFrequencyMap.put(rightChar, charFrequencyMap.getOrDefault(rightChar, 0) + 1);

//   while (charFrequencyMap.size() > k) {
//     char leftChar = str.charAt(windowStart);
//     charFrequencyMap.put(leftChar, charFrequencyMap.get(leftChar) - 1);
//     if (charFrequencyMap.get(leftChar) == 0) {
//       charFrequencyMap.remove(leftChar);
//     }
//     windowStart++;
//   }
//   maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }
