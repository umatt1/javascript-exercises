const removeFromArray = function(array, ...toRemove) {
    function notInToRemove(item) {
        return !toRemove.includes(item);
    }
    return array.filter(notInToRemove);
};

// Do not edit below this line
module.exports = removeFromArray;
