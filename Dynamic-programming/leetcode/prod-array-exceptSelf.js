var productExceptSelf = function (nums) {
	let output = Array();
	if (nums.length < 1) {
		return output;
	}
	let product = 1;
	for (let i = 0; i < nums.length; i++) {
		product *= nums[i];
		output.push(product);
	}

	product = 1;
	for (let i = nums.length - 1; i > 0; i--) {
		output[i] = output[i - 1] * product;
		product *= nums[i];
	}
	output[0] = product;
	return output;
};

var productExceptSelf = function (nums) {
	let n = nums.length;
	let result = new Array(n).fill(1);
	let prefixProduct = 1;
	let suffixProduct = 1;
	let left = 0;
	let right = n - 1;

	while (left < n) {
		result[left] *= prefixProduct;
		result[right] *= suffixProduct;
		prefixProduct *= nums[left++];
		suffixProduct *= nums[right--];
	}
	return result;
};

// console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([1, 2, 3, 4]));
