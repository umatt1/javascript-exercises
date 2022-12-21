const repeatString = function(item, times) {
    if (times < 0) {
        return 'ERROR';
    }
    return item.repeat(times);
};

// Do not edit below this line
module.exports = repeatString;
