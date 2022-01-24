const canSum = (target, numbers) => {
	const table = Array(target + 1).fill(false);

	table[0] = true;
	console.log(table);

	for (let i = 0; i <= target; i++) {
		if (table[i] == true) {
			for (num of numbers) {
				table[i + num] = true;
			}
		}
	}

	return table[target];
};
console.log(canSum(7, [5, 4, 3]));
