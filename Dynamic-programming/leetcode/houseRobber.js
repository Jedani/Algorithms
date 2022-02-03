const rob = function (nums) {
	let maxNum = 0;
	for (let i = 0; i < nums.length; i++) {
		maxNum = nums[i] + nums[i + 2];
		if (maxNum) {
			console.log(maxNum);
		}
	}
	console.log(maxNum);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
