/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s === ""){
        return 0;
    }
    
    let start = 0;
    let maxLength = 1;

    for(let i = start; i<s.length; i++){
        // check if the current character was already seen before
        for(let j = i-1; j >= start; j--){
            if(s[i] === s[j]){
                maxLength = Math.max(maxLength, i - start);
                start = j+1; // skip the first occurence of the repeated char
                i = start - 1; // adjust i for the outer loop to continue with the updated value of start
                break;
            }
        }
    }

    // check also for the last substring
    maxLength = Math.max(maxLength, s.length - start);

    return maxLength;
};

module.exports = lengthOfLongestSubstring;