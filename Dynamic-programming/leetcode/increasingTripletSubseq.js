var increasingTriplet = function (nums) {
	if (nums.length < 3) {
		return false;
	}

	let q = +Infinity;
	let j = +Infinity;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] <= q) {
			q = nums[i];
		} else if (nums[i] <= j) {
			j = nums[i];
		} else {
			return true;
		}
	}

	return false;
};

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
