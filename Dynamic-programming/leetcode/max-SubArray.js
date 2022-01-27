const maxSubArray = (nums) => {
	let maxSub = nums[0];
	let currSum = 0;
	for (let num of nums) {
		if (currSum < 0) {
			currSum = 0;
		}
		currSum += num;
		maxSub = Math.max(maxSub, currSum);
	}
	return maxSub;
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
