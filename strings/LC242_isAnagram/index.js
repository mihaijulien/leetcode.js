/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }

	const characterMap = {};

	for(let i = 0; i<s.length; i++){
		characterMap[s[i]] = characterMap[s[i]] + 1 || 1;
	}

	for(let j = 0; j<t.length; j++){
		if(!characterMap[t[j]]) {
			return false;
		} else {
			characterMap[t[j]]--;
		}
	}

	return true;
};

module.exports = isAnagram;