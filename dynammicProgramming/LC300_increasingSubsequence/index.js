/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(nums.length === 0){
        return 0;
    }
    let dp = new Array(nums.length).fill(1);
    let maxSoFar = 1;

    for(let j = 1; j < nums.length; j++){
        for(let i = 0; i < j; i++){
            if(nums[j] > nums[i]){
                dp[j] = Math.max(dp[i] + 1, dp[j]);
            }
        }
        maxSoFar = Math.max(maxSoFar, dp[j]);
    }

    return maxSoFar;
};

module.exports = lengthOfLIS;