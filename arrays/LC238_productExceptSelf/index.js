/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = nums.map(n => 1); // [1..]
    let product = 1; // accumulator

    // multiply from the left
    for(let i=0; i<nums.length; i++){
        output[i] = output[i] * product;
        product = product * nums[i];
    }

    product = 1; //reset accumulator

    // multiply from the right
    for(let j = nums.length - 1; j >=0; j--){
        output[j] = output[j] * product;
        product = product * nums[j];
    }

    return output;
};

module.exports = productExceptSelf;