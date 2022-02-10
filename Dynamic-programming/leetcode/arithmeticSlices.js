var numberOfArithmeticSlices = function (nums) {
	let n = nums.length;
	let res = new Array(n).fill(0);
	let count = 0;

	for (let i = 2; i < n; i++) {
		if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
			res[i] = 1 + res[i - 1];
			count += res[i];
		}
	}
	return count;
};

// OR

var numberOfArithmeticSlices = function (nums) {
	let n = nums.length;
	let res = 0;
	let count = 0;

	for (let i = 2; i < n; i++) {
		if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
			res = 1 + res;
			count += res;
		} else {
			res = 0;
		}
	}
	return count;
};

console.log(numberOfArithmeticSlices([1, 2, 3, 4]));
