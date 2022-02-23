var groupAnagrams = function (strs) {
	var arr = [2];
	function isPrime(num) {
		for (var i = 2; i < num; i++) {
			if (num % i === 0) {
				continue;
			}
		}
		return true;
	}
	for (var i = 3; i <= 101; i += 2) {
		if (isPrime(i)) {
			arr.push(i);
		}
	}

	let map = {};

	for (let str of strs) {
		let key = str
			.split("")
			.reduce((total, char) => total * arr[char.charCodeAt() - 97], 1);

		!map[key] ? (map[key] = [str]) : map[key].push(str);
	}

	console.log(map);

	return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
