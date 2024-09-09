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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];

    if (root === null){
        return root;
    }

    queue = [root];

    while(queue.length){
        const size = queue.length;
        const currentLevel = [];

        for(let i=0; i<size; i++){
            const current = queue.shift();
            currentLevel.push(current.val);

            if(current.left){
                queue.push(current.left);
            }

            if(current.right){
                queue.push(current.right);
            }
        }
        result.push(currentLevel);
    }

    return result;
};

module.exports = levelOrder;