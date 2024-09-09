/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }

    const queue = [root];

    while(queue.length) {
        const queueLength = queue.length;
     
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            // invert the children
            const temp = current.left;
            current.left = current.right;
            current.right = temp;

            if (current.left) {
                queue.push(current.left);
            }
            if (current.right){
                queue.push(current.right);
            } 
        }
    }

    return root;
};

module.exports = invertTree;
