//we are going to create a string reversal method using recursion

function reverseString(value) {
	if (value == "") {
		return "";
	}
	return reverseString(value.substring(1)) + value.charAt(0);
}

console.log(reverseString("Allan"));
