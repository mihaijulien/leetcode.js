const averageOfSubtree = require('./index');
const { BinarySearchTree } = require('../utility/utility');


test('returns true for same trees', () => {
	const BST = new BinarySearchTree();
	BST.insert(4);
	BST.insert(8);
	BST.insert(5);
	BST.insert(0);
	BST.insert(1);
	BST.insert(null);
    BST.insert(6);

	expect(averageOfSubtree(BST.root)).toEqual(3);
});