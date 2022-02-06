// const twoSum = (target, nums) => {
// 	let store = {};

// 	for (let [index, num] of nums.entries()) {
// 		if (store[num] !== undefined) {
// 			return [store[num], index];
// 		}
// 		store[target - num] = index;
// 	}
// };

// OR using the two pointers technique

// TWO POINTERS

const twoSum = (target, nums) => {
	let n = nums.length;
	let leftPointer = 0;
	let rightPointer = n - 1;

	while (leftPointer < rightPointer) {
		let sum = nums[leftPointer] + nums[rightPointer];
		if (sum == target) {
			return true;
		} else if (sum > target) {
			rightPointer -= 1;
		} else if (sum < target) {
			leftPointer += 1;
		}
	}
	console.log(rightPointer);
	console.log(leftPointer);
	return false;
};

console.log(twoSum(9, [2, 11, 7, 15, 6]));
// console.log(twoSum(6, [3, 3]));
// console.log(twoSum(6, [3, 2, 4]));
