const Node = () => {
	let data;
	let leftChild;
	let rightChild;
};

const Tree = (arr) => {
	let root;

	function buildTree(arr) {
		// Sort the array
		// Remove duplicates
	}

	function prettyPrint(node, prefix = "", isLeft = true) {
		if (node.right !== null) {
			prettyPrint(
				node.right,
				`${prefix}${isLeft ? "│   " : "    "}`,
				false
			);
		}
		console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
		if (node.left !== null) {
			prettyPrint(
				node.left,
				`${prefix}${isLeft ? "    " : "│   "}`,
				true
			);
		}
	}

	function insert(value) {}

	function remove(value) {}

	function find(value) {}

	function levelOrder(fn) {}

	function inorder() {}

	function preorder() {}

	function postorder() {}

	function heigth() {}

	function depth(node) {}

    function isBalanced() {}

    function rebalance() {}
};
