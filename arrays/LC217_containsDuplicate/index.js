/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const visited = {};
    for(let i=0; i<nums.length; i++){
        if(!visited[nums[i]]){
            visited[i] = 1;
        } else {
            return true;
        }
    }

    return false;
};

module.exports = containsDuplicate;