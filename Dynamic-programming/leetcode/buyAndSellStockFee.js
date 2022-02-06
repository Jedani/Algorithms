var maxProfit = function (prices, fee) {
	let buy = [0 - prices[0]];
	let sell = [0];

	for (let i = 1; i < prices.length; i++) {
		let prevBuy = buy[i - 1];
		let currBuy = (sell[i - 1] || 0) - prices[i];
		buy.push(Math.max(prevBuy, currBuy));

		let prevSell = sell[i - 1];
		let currSell = buy[i - 1] + prices[i] - fee;
		sell.push(Math.max(prevSell, currSell));
	}
	return sell[sell.length - 1];
};

// OR

var maxProfit = function (prices, fee) {
	let noStock = 0,
		stock = -Infinity;

	for (let price of prices) {
		let tempNoStock = Math.max(noStock, stock + price);
		let tempStock = Math.max(stock, noStock - price - fee);
		noStock = tempNoStock;
		stock = tempStock;
	}
	return noStock;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([3, 9, 1, 5, 8, 10], 2));
console.log(maxProfit([7, 6, 4, 3]));
