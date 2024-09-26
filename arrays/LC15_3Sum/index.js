/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b);

    const res = [];

    for(let i = 0; i<nums.length; i++){
        let left = i+1;
        let right = nums.length - 1;
        const target = 0 - nums[i];

        if(i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        while(left < right){
            if(nums[left] + nums[right] === target){
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                // don't add duplicates. 
                // eg. [-4, -1, -1, 0, 1, 2]
                // move left pointer from the first -1 to the second -1
                while(nums[left] === nums[left - 1]){
                    left++;
                }
            } else if (nums[left] + nums[right] < target){
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};

module.exports = threeSum;