//  USING THE SLIDNG WINDOW TECHNIQUE

const maxSubArray = (nums, size) => {
	let n = nums.length;
	let currMax = 0;
	let max = -Infinity;
	let window = size;

	for (let i = 0; i < n - (size - 1); i++) {
		currMax = nums.slice(i, window).reduce((a, b) => a + b);
		window++;
		console.log(currMax);
		if (currMax > max) {
			max = currMax;
		}
	}
	return max;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4], 5));
console.log(maxSubArray([4, 2, 1, 7, 8, 1, 2, 8, 1, 0], 3));
