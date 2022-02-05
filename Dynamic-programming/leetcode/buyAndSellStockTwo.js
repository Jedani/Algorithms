var maxProfit = function (prices) {
	let profit = 0;
	for (i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			profit += prices[i] - prices[i - 1];
		}
	}
	return profit;
};

console.log(maxProfit([6, 1, 3, 2, 4, 7]));
console.log(maxProfit([1, 2, 3, 4, 5, 1]));
console.log(maxProfit([7, 6, 4, 3]));
