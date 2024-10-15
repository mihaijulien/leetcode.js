/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3){
        return n;
    }

    // index 0 = how many steps to reach step 0 - 0
    // index 1 = how many steps to reach step 1 - 1
    // index 2 = how many steps to reach step 2 - 2
    // etc fibonacci
    let ways = [0,1,2,3]; 

    for (let i=4; i<= n; i++){
        ways.push(ways[i-1] + ways[i-2]);
    }

    return ways[n];
};

module.exports = climbStairs;