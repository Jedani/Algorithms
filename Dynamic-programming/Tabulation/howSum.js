const howSum = (target, numbers) => {
	const table = Array(target + 1).fill(null);

	table[0] = [];
	console.log(table);

	for (let i = 0; i <= target; i++) {
		if (table[i] !== null) {
			for (num of numbers) {
				table[i + num] = [...table[i], num];
			}
		}
	}
	console.log(table);
	return table[target];
};
console.log(howSum(7, [5, 4, 3]));
