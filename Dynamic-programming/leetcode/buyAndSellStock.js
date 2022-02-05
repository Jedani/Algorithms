const maxProfit = (prices) => {
	let buyPrice = prices[0];
	let profit = 0;

	for (let i = 0; i < prices.length - 1; i++) {
		let temp = prices[i + 1] - prices[i];
		if (temp > 0) {
			if (prices[i] < buyPrice) {
				buyPrice = prices[i];
			}

			if (prices[i + 1] - buyPrice > profit) {
				profit = prices[i + 1] - buyPrice;
			}
		}
	}

	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));

// [2, 4, 1]; 2

//  OR

const maxProfit = (prices) => {
	let buy = prices[0];
	prices[0] = 0;
	let profit = 0;

	for (let i = 1; i < prices.length; i++) {
		if (buy > prices[i]) {
			buy = price[i];
			prices[i] = 0;
		} else {
			profit = Math.max(profit, prices[i] + buy);
		}
	}
	return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
