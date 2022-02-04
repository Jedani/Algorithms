var canJump = function (nums) {
	let n = nums.length;
	let minJumpsArray = new Array(n).fill(Infinity);

	minJumpsArray[0] = 0;
	minJumpsArray;
	for (let i = 1; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (i <= j + nums[j]) {
				minJumpsArray[i] = Math.min(minJumpsArray[i], minJumpsArray[j] + 1);
			}
		}
	}
	return minJumpsArray[n - 1];
};

console.log(canJump([2, 3, 1, 1, 4]));
