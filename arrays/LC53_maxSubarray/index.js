/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    let maxSum = nums[0];
    let currentSum = nums[0];

    for(let i=1; i<nums.length; i++){
        if(currentSum < 0){
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};

module.exports = maxSubArray;