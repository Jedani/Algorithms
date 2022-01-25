function cache(func, storage = {}) {
	return function () {
		let keyMemoized = JSON.stringify(arguments);
		return keyMemoized in storage
			? storage[keyMemoized]
			: (storage[keyMemoized] = func.apply(this, arguments));
	};
}
