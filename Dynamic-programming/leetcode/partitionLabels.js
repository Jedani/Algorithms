var partitionLabels = function (s) {
	let map = new Map();

	for (let i = s.length - 1; i >= 0; i--) {
		const ch = s[i];

		if (!map[ch]) {
			map[ch] = i;
		}
	}

	let output = [];
	let start = 0,
		end = 0;
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		let lastind = map[char];

		if (lastind > end) {
			end = lastind;
		}
		if (i === end) {
			let part = end - start + 1;
			output.push(part);
			start = i + 1;
		}
	}

	return output;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));

// const partitionLabels = (string) => {
// 	const lastSeenIndices = {};

// 	for (let i = string.length - 1; i >= 0; i--) {
// 		const char = string[i];

// 		if (!lastSeenIndices[char]) {
// 			lastSeenIndices[char] = i;
// 		}
// 	}

// 	const partitions = [];
// 	let start = 0;
// 	let end = 0;

// 	for (let i = 0; i < string.length; i++) {
// 		const char = string[i];
// 		const lastCharIdx = lastSeenIndices[char];

// 		if (lastCharIdx > end) end = lastCharIdx;

// 		if (i === end) {
// 			const partition = end - start + 1;
// 			partitions.push(partition);
// 			start = i + 1;
// 		}
// 	}

// 	return partitions;
// };
