var maxScoreSightseeingPair = function (values) {
	let max = values[0] + 0;
	let currMax = -Infinity;
	for (let j = 1; j < values.length; j++) {
		currMax = Math.max(currMax, max + values[j] - j);
		max = Math.max(max, values[j] + j);
	}
	return currMax;
};

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
