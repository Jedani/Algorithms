const minCostClimbingStairs = (cost) => {
	class Node {
		constructor(data) {
			this.left = null;
			this.right = null;
			this.data = data;
		}
	}
	class Bst {
		constructor() {
			this.root = null;
		}

		insert(data) {
			if (this.root) {
				this.root.insert(data);
			} else {
				this.root = new Node(data);
			}
		}
	}
};

console.log(minCostClimbingStairs([0, 0, 1, 1]));

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
