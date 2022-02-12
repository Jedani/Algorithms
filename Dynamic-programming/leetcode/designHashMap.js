const MyHashMap = function () {
	this.map = [];
};

MyHashMap.prototype.put = function (key, value) {
	this.map[key] = value;
};

MyHashMap.prototype.get = function (key) {
	return this.map[key] === undefined ? -1 : this.map[key];
};

MyHashMap.prototype.remove = function (key) {
	this.map[key] = undefined;
};
