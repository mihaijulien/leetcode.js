/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // DP arrays
    let maxTillIndex = [nums[0]]; // largest product leading up to a given index
    let minTillIndex = [nums[0]]; // smallest product leading up to a given index
    let max = nums[0];

    /*
    eg.
    Input: [-2,3,-4]
    maxTillIndex [-2,3,24]
    minTillIndex [-2,-6,-12]
    */

    for(let i=1; i<nums.length; i++){
        const num = nums[i];
        // we just use the DP minTillIndex array to recalculate the maximum product in maxTillIndex
        maxTillIndex[i] = Math.max(num, num * maxTillIndex[i-1], num * minTillIndex[i-1]);
        minTillIndex[i] = Math.min(num, num * maxTillIndex[i-1], num * minTillIndex[i-1]);
        max = Math.max(max, maxTillIndex[i]);
    }

    return max;
};

module.exports = maxProduct;