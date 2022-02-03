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
	return Math.max(robHouse(0, nums.length - 1), robHouse(1, nums.length));
};
