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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    count = 0;
    
    function subTreeAverage(node){
        if (node === null) {
            return [0, 0];
        }

        const [leftSum, leftCount] = subTreeAverage(node.left);
        const [rightSum, rightCount] = subTreeAverage(node.right);

        const nodeSum = leftSum + rightSum + node.val;
        const nodeCount = leftCount + rightCount + 1;

        if (node.val === Math.floor(nodeSum / nodeCount)) {
            count++;
        }

        return [nodeSum, nodeCount];
    }
    
    subTreeAverage(root);
    return count; 
};

module.exports = averageOfSubtree;