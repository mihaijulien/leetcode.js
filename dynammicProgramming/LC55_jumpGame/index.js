/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length === 0){
        return true;
    }

    if(nums.length === 1){
        return true;
    }

    let dp = new Array(nums.length).fill(false);
    dp[0] = true;
    
    for(let j = 1; j < nums.length; j++){
        for(let i = 0; i<j; i++){
            if(dp[i] && i + nums[i] >= j){
                dp[j] = true;
                break;
            }
        }
    }

    return dp[dp.length -1];
};

module.exports = canJump;
