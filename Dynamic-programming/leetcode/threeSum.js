var threeSum = function (nums) {
	let res = [];
	if (nums.length < 3) return [];
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length - 2; i++) {
		if (i === 0 || (i > 0 && nums[i - 1] !== nums[i])) {
			let a = 0 - nums[i],
				lo = i + 1,
				hi = nums.length - 1;
			while (lo < hi) {
				if (nums[lo] + nums[hi] === a) {
					res.push([-a, nums[lo], nums[hi]]);
					while (nums[lo] === nums[lo + 1]) lo++;
					while (nums[hi] === nums[hi - 1]) hi--;
				}
				if (nums[lo] + nums[hi] > a) hi--;
				else lo++;
			}
		}
	}
	return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
