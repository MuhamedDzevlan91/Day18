// Only change code below this
const numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
const uniqueArray = [];

for(let item of new Set(numberArray)){
    uniqueArray.push(item);
}

uniqueArray.sort((a,b) => a - b);

// Only change code above this
module.exports = {numberArray, uniqueArray};