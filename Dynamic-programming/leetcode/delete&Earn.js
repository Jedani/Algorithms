var deleteAndEarn = function (nums) {
	let numsM = new Array(Math.max(...nums) + 1).fill(0);
	for (let num of nums) numsM[num] += num;
	let i, cur, prev;
	for (i = 2; i < numsM.length; i++) {
		cur = numsM[i - 2] + numsM[i]; //current value + prev -2 value
		prev = Math.max(numsM[i - 2], numsM[i - 1]); // or highest of prev 2 values
		numsM[i] = cur; //update current (reusing numsM)
		numsM[i - 1] = prev; //update last to be best of prev 2.
	}
	return Math.max(numsM[i - 1], numsM[i - 2]);
};

// console.log(deleteAndEarn([3, 4, 2]));
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]));
