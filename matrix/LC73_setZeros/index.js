/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let firstColHasZero = false;
    let firstRowHasZero = false;

    // check if first column has zero
    for(let i = 0; i<matrix.length; i++){
        if(matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // check if first row has zero
    for(let i = 0; i<matrix[0].length; i++){
        if(matrix[0][i] === 0){
            firstRowHasZero = true;
            break;
        }
    }

    // use first row and column as flags, if rest of cells have zeros
    for(let row = 1; row < matrix.length; row++){
        for(let col = 1; col <matrix[0].length; col++){
            if(matrix[row][col] === 0){
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }

    // zero out cells based on flags in first row and column
    for(let row = 1; row < matrix.length; row++){
        for(let col = 1; col <matrix[0].length; col++){
            if(matrix[row][0] === 0 || matrix[0][col] === 0){
                matrix[row][col] = 0;
            }
        }
    }

    // zero out first column
    if(firstColHasZero){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][0] = 0;
        }
    }

    // zero out first row
    if(firstRowHasZero){
        for(let i = 0; i < matrix[0].length; i++){
            matrix[0][i] = 0;
        }
    }
    
};

module.exports = setZeroes;