function repeater(out, char, num) {
	if (out.length === num) {
		return out;
	}

	return repeater(out + char, char, num);
}

let output = repeater("", "o", 5);
console.log(output);
