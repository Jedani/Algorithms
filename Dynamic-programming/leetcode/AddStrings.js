const addStrings = function (num1, num2) {
	const dict = {
		"": 0,
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
	};

	sum = "";
	len1 = num1.length;
	len2 = num2.length;
	carry = 0;

	while (len1 > 0 || len2 > 0 || carry) {
		num1Digit = dict[num1.charAt(len1 - 1)]; // read num1 last digit
		num2Digit = dict[num2.charAt(len2 - 1)]; // read num2 last digit
		len1--; // reduce lengths
		len2--;

		digitTotal = num1Digit + num2Digit + carry; // do sum with carry
		carry = digitTotal > 9 ? parseInt(digitTotal / 10) : 0; // update carry if > 9
		digitToAppend = (digitTotal > 9 ? digitTotal % 10 : digitTotal) + "";
		sum = digitToAppend + sum; // append to existing string into first position
	}

	return sum;
};
