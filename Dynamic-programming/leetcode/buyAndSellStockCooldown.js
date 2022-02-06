var maxProfit = function (prices) {
	let noStock = 0;
	let inHand = -prices[0];
	let sold = 0;

	for (i = 1; i < prices.length; i++) {
		inHand = Math.max(inHand, noStock - prices[i]);
		noStock = Math.max(noStock, sold);
		sold = inHand + prices[i];
		console.log(noStock);
		console.log(inHand);
		console.log(sold);
	}
	let ans = Math.max(noStock, sold);
	return ans;
};

console.log(maxProfit((prices = [6, 1, 3, 2, 4, 7])));
console.log(maxProfit([1, 2, 3, 0, 2]));
