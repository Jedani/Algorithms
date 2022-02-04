var maxSubarraySumCircular = function (nums) {
	let maxCont = -Infinity;
	let minCont = +Infinity;
	let numSum = 0;

	let tempMaxSum = 0;
	let tempMinSum = 0;

	for (i = 0; i < nums.length; i++) {
		numSum += nums[i];

		tempMaxSum += nums[i];
		maxCont = maxCont < tempMaxSum ? tempMaxSum : maxCont;
		tempMaxSum = tempMaxSum < 0 ? 0 : tempMaxSum;

		tempMinSum += nums[i];
		minCont = minCont > tempMinSum ? tempMinSum : minCont;
		tempMinSum = tempMinSum > 0 ? 0 : tempMinSum;
	}
	if (numSum == minCont) {
		return maxCont;
	}
	return Math.max(maxCont, numSum - minCont);
};

// console.log(maxSubarraySumCircular([1, -2, 3, -2]));
console.log(maxSubarraySumCircular([5, -3, 5]));
