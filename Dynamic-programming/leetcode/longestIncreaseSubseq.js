var lengthOfLIS = (nums) => {
	return nums.reduce(
		(sequence, num) => {
			if (num > sequence[sequence.length - 1]) sequence.push(num);
			else sequence[sequence.findIndex((val) => val >= num)] = num;
			return sequence;
		},
		[nums[0]],
	).length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
