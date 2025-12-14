const palindromes = function (string) {
    const characters = '0123456789abcdefghijklmnopqrstuvwxyz';

    const filteredStr = string
        .toLowerCase()
        .split('')
        .filter((character) => characters.includes(character))
        .join('');

    const reversedStr = filteredStr.split('').reverse().join('');

return filteredStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
