// const maxSubArray = (nums) => {
// 	let maxSub = nums[0];
// 	let currSum = 0;
// 	for (let num of nums) {
// 		if (currSum < 0) {
// 			currSum = 0;
// 		}
// 		currSum += num;
// 		maxSub = Math.max(maxSub, currSum);
// 	}
// 	return maxSub;
// };
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// OR finding with indices using Kadanes algorithm

const maxSubArray = (nums) => {
	let currMax = nums[0];
	let endMax = 0;

	let start = 0;
	end = 0;
	s = 0;
	for (let i = 0; i < nums.length; i++) {
		endMax = endMax + nums[i];
		if (currMax < endMax) {
			currMax = endMax;
			start = s;
			end = i;
		}
		if (endMax < 0) {
			endMax = 0;
			s = i + 1;
		}
	}
	let ans = `max value is ${currMax} and its indexes are [ ${start},${end} ]`;
	return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
