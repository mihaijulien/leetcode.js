/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsVisited = {}; // {2:0, 7:1}  value:index
    const res = [];

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const complement = target - num;

        if(numsVisited[complement] !== undefined){
            res.push(i);
            res.push(numsVisited[complement]);
        }

        numsVisited[num] = i;
    }

    return res;
};

module.exports = twoSum;