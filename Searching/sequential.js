function seqSearch(list, item) {
	if (list.length == 0) {
		return;
	}

	let i = 0;

	while (i < list.length && list[i] !== item) {
		i++;
	}
	return i;
}

console.log(seqSearch([3, 2, 56, 7, 89, 4, 32, 10], 10));
