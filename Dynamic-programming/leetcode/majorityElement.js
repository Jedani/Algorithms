var majorityElement = function (nums) {
	let reduced = nums.reduce((items, item) => {
		if (item in items) {
			items[item]++;
		} else {
			items[item] = 1;
		}
		return items;
	}, {});
	console.log(reduced);
	let ans = Object.keys(reduced).reduce((a, b) =>
		reduced[a] > reduced[b] ? a : b,
	);
	return ans;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
