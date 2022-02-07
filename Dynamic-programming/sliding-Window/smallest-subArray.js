const minWindowSize = (nums, target) => {
	let n = nums.length;
	let currSum = 0;
	let minWindow = +Infinity;
	let start = 0;

	for (let end = 0; end < n; end++) {
		currSum += nums[end];

		while (currSum >= target) {
			minWindow = Math.min(minWindow, end - start + 1);
			currSum -= nums[start];
			start++;
		}
	}
	return minWindow;
};

console.log(minWindowSize([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 8));
