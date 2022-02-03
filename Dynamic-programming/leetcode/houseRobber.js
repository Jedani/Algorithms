const rob = function (nums) {
	if (!nums.length) return 0;
	if (nums.length == 1) return nums[0];
	if (nums.length == 2) return Math.max(nums[0], nums[1]);

	for (let i = 2; i < nums.length; i++) {
		nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
	}
	return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
};

// OR recursivley

var rob = function (nums) {
	if (nums.length == 0) return 0;
	if (nums.length == 1) return nums[0];

	const robHouse = (start, end) => {
		let prev = 0,
			curr = 0;

		//prev means house at i - 2, curr is house at i - 1
		for (let i = start; i < end; i++) {
			let temp = Math.max(nums[i] + prev, curr);
			prev = curr;
			curr = temp;
		}
		return curr;
	};
	return Math.max(robHouse(0, nums.length), robHouse(0, nums.length));
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
