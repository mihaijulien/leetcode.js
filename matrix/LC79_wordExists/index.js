/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let found = false;

    for (let row = 0; row <board.length; row++){
        for(let col=0; col < board[0].length; col++){
            //when we find the first letter of the word, dfs in all directions
            if(board[row][col] == word[0]){
                dfs(row, col, 0, word);
            }
        }
    }

    function dfs(row, col, count, word){
        // base cases
        if(count === word.length){
            found = true;
            return;
        }

        if(
            row < 0 || 
            row >= board.length || 
            col < 0 || 
            col >= board[0].length || 
            board[row][col] !== word[count] || 
            found
        ){
            return;
        }

        let temp = board[row][col];
        board[row][col] = ""; // we mark the current cell as visited by changing the letter of it to an empty string

        // run dfs in all directions
        dfs(row + 1, col, count+1, word);
        dfs(row - 1, col, count+1, word);
        dfs(row, col + 1, count+1, word);
        dfs(row, col - 1, count+1, word);

        //put the letters back in each cell
        board[row][col] = temp;
    }

    return found;
};

module.exports = exist;