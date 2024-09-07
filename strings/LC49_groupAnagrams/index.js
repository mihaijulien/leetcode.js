/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let grouped = {};

    for (let i=0; i<strs.length; i++){
        const word = strs[i];
        //words that are anagrams of each other will be the same word if their letters are sorted alphabetically
        const key = word.split("").sort().join(""); 

        if(!grouped[key]){
            grouped[key] = [];
        } 
            
        grouped[key].push(word);
        
    }

    return Object.values(grouped);
};

module.exports = groupAnagrams;