const twoSum = (target, nums) => {
	let store = {};

	for (let [index, num] of nums.entries()) {
		if (store[num] !== undefined) {
			return [store[num], index];
		}
		store[target - num] = index;
	}
};

console.log(twoSum(9, [2, 11, 15, 7]));
console.log(twoSum(6, [3, 3]));
console.log(twoSum(6, [3, 2, 4]));
