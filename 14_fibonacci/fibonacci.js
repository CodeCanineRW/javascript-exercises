const fibonacci = function(sequence) {
    const sequenceNum = parseInt(sequence);
    let onePrevious = 1;
    let twoPrevious = 0;
    let currentVal = 0;

    if (sequenceNum < 0)
        return "OOPS";
    if (sequenceNum == 0)
        return 0;

    for (let i=2; i<=sequenceNum; i++) {
        currentVal = onePrevious + twoPrevious; 
        twoPrevious = onePrevious; 
        onePrevious = currentVal; 
    }
    return onePrevious;
};

// Do not edit below this line
module.exports = fibonacci;
