// var canJump = function (nums) {
// 	let n = nums.length;
// 	let minJumpsArray = new Array(n).fill(Infinity);

// 	minJumpsArray[0] = 0;
// 	minJumpsArray;
// 	for (let i = 1; i < n; i++) {
// 		for (let j = 0; j < i; j++) {
// 			if (i <= j + nums[j]) {
// 				minJumpsArray[i] = minJumpsArray[j] + 1;
// 			}
// 		}
// 	}
// 	minJumpsArray;
// 	if (minJumpsArray.includes(Infinity)) {
// 		return false;
// 	}
// 	return true;
// };

// console.log(canJump([0, 1]));

// OR PEAK FINDING

var canJump = function (nums) {
	let n = nums.length;
	let currIndex = 0;

	for (let i = 0; i < n; i++) {
		if (currIndex < i) {
			return false;
		}
		currIndex = Math.max(currIndex, i + nums[i]);
	}
	return true;
};

console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 2, 1, 0, 4]));
