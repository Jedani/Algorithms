function cache(func, storage = {}) {
	console.log(storage);
	return function () {
		let keyMemoized = JSON.stringify(arguments);
		return keyMemoized in storage
			? storage[keyMemoized]
			: (storage[keyMemoized] = func.apply(this, arguments));
	};
}

const funct = (a, b) => {
	return a + b;
};

cache(funct);
