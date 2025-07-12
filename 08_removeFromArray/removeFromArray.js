const removeFromArray = function(array, ...theArgs) {
    let filteredArray = [];

    for (item of array) {
        if (theArgs.includes(item)) {
            continue;
        } else {
            filteredArray.push(item);
        }
    }
    return filteredArray;
};

// console.log(removeFromArray([1, 2, 3], 3)); // Should log: [1, 2, 3]

// Do not edit below this line
module.exports = removeFromArray;
