function palindrome(value) {
	if (value.length == 0 || value.length == 1) {
		return true;
	}

	//decided to test the new at syntax and it works es(2022)

	if (value.charAt(0) === value.at(-1) /*|| value.charAt(value.length - 1)*/) {
		return palindrome(value.substring(1, value.length - 1));
	}
	return false;
}

console.log(palindrome("kayak"));
console.log(palindrome("siis"));
console.log(palindrome("a"));
