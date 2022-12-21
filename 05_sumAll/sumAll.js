const sumAll = function(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number'
        || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    let ans = 0;
    for (let i = Math.min(num1,num2); i <= Math.max(num1,num2); i++) {
        ans += i;
    }
    return ans;
};

// Do not edit below this line
module.exports = sumAll;
