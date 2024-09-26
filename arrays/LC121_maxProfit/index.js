/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let cheapestPrice = prices[0];
    for(let i = 1; i<prices.length; i++){
        cheapestPrice = Math.min(cheapestPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - cheapestPrice);
    }

    return maxProfit;
};

module.exports = maxProfit;