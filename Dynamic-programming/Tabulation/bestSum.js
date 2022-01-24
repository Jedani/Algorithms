const bestSum = (target, numbers) => {
	const table = Array(target + 1).fill(null);

	table[0] = [];
	console.log(table);

	for (let i = 0; i <= target; i++) {
		if (table[i] !== null) {
			for (num of numbers) {
				const combination = [...table[i], num];

				if (!table[i + num] || table[i + num].length > combination.length) {
					table[i + num] = combination;
				}
			}
		}
	}
	console.log(table);
	return table[target];
};
console.log(bestSum(8, [2, 5, 6, 3]));
