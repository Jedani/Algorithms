var getMaxLen = function (nums) {
	let firstNeg = -1;
	let lastZero = -1;
	let countNeg = 0;
	let max = 0;

	for (i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (num < 0) {
			countNeg++;
			if (firstNeg == -1) firstNeg = i;
		}
		if (num == 0) {
			firstNeg = -1;
			lastZero = i;
			countNeg = 0;
		} else {
			if (countNeg % 2 == 0) {
				max = Math.max(max, i - lastZero);
			} else {
				max = Math.max(max, i - firstNeg);
			}
		}
	}
	return max;
};

console.log(getMaxLen([1, -2, -3, 4]));
