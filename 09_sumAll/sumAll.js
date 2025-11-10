// Implement a function that takes 2 positive integers and returns the sum of 
// every integer between (and including) them:


const sumAll = function(a, b) {
    let range = 0;
    let start;
    let sum = 0;
    if (a<0 || b<0 || a === NaN || b === NaN || Math.floor(a) !== a || Math.floor(b) !== b) {
        return 'ERROR';
    }
    if (b >= a) {
        range = b - a;
        start = a
    } else if (a > b) {
        range = a - b;
        start = b
    }
    for (i = range ; i >= 0 ; i--) {
        sum += (start + i)
    }
    return sum;
};

console.log(sumAll(10, 5));

// Do not edit below this line
module.exports = sumAll;
