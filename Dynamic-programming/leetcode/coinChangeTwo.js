// steps
// build dp table using values less than amount
// initialize all to 0 and 0 position to 1
// 0 position is one since we have a way of generating
// change for 0 from any array
// go through coins less than amount
//for any coin go through values equal to or greater than coin
// but less than amount
// if value is greater than or equal to coin
// subtract value from value from coin to get diff
// if value equal to coin, then you have found change
// so you've found one way to find change, remember 0 is initialized to 1
// since 0 is the only number with a value of 1
// you add the change at table[diff] to current position in table
//so when you get to a number that's a coin
//the first diff will be 0 so the number of ways to get change for
//that particular coin is increased by 1
//for example, with an array of [1,2]
//you can find at least one change for 1 and 2 already from the coins
// if the diff itself has no change
// then 0 will be added

// change, optimized
// O(nm) time, O(m) space
const change = (amount, coins) => {
	// build dp table with 1 at 0
	let table = Array.from({ length: amount + 1 }, (e, i) => (i === 0 ? 1 : 0));

	for (let coin of coins) {
		if (coin <= amount) {
			for (let i = coin; i <= amount; i++) {
				let diff = i - coin;
				table[i] += table[diff];
			}
		}
	}
	return table[amount];
};

console.log(change(5, [1, 2, 5]));
