const intersect = (nums1, nums2) => {
	let result = [];

	for (let i = 0; i < nums1.length; i++) {
		if (nums2.includes(nums1[i])) {
			result.push(nums1[i]);
			nums2.splice(nums2.indexOf(nums1[i]), 1);
			nums1.splice(i, 1);
			i--;
		}
	}

	return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
