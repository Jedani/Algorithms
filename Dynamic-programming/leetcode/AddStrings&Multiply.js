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

const multiply = function (num1, num2) {
	if (num1 === "0" || num2 === "1") return num1;
	if (num2 === "0" || num1 === "1") return num2;
	let i, j;
	let carry = 0,
		sum = 0;
	let ret = new Array(num1.length + num2.length).fill(0);

	for (i = num1.length - 1; i >= 0; i--) {
		carry = 0;
		for (j = num2.length - 1; j >= 0; j--) {
			sum = num1[i] * num2[j] + carry + ret[i + j + 1];
			carry = Math.floor(sum / 10);
			ret[i + j + 1] = sum % 10;
		}
		ret[i + j + 1] = carry;
	}
	if (ret[0] === 0) ret.shift();
	return ret.join("");
};
