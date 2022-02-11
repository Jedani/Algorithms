var singleNumber = function (nums) {
	let reduced = nums.reduce((items, item) => {
		if (item in items) {
			items[item]++;
		} else {
			items[item] = 1;
		}
		return items;
	}, {});

	const key = Object.keys(reduced).find((key) => reduced[key] === 1);

	return key;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
