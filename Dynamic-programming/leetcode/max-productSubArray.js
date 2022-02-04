var maxProduct = function (nums) {
	let currMax = nums[0];

	let currMin = nums[0];
	let result = nums[0];

	for (let i = 1; i < nums.length; i++) {
		let copied = currMax;
		currMax = Math.max(nums[i], Math.max(currMax * nums[i], currMin * nums[i]));
		currMin = Math.min(nums[i], Math.min(copied * nums[i], currMin * nums[i]));
		result = Math.max(currMax, result);
	}
	return result;
};

console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([3, -1, 4]));
// console.log(maxProduct([0, 2]));
// console.log(maxProduct([-3, -1, -1]));
