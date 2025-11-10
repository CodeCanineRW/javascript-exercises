const removeFromArray = function(array, ...remove) {
    // let removeItems = [...remove];
    // for (let item of removeItems) {
    //     while (array.find((element) => element === item)) {
    //     let itemIndex = array.indexOf(item);
    //     array.splice(itemIndex, 1);               
    //     }
    //     }
    // return array;

    return array.filter((item) => !remove.includes(item));
}
let sampleArray = [1, 2, 3, 4, 5, 3, 4, 6, 7, 4];
console.log(removeFromArray(sampleArray, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
