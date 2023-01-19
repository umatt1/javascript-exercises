const palindromes = function (myString) {
    myString = myString.toLowerCase().replace(/[^\w]/g, "");
    let i = 0;
    let j = myString.length-1;
    while (i < j && myString.charAt(i)==myString.charAt(j)) {
        i++;
        j--;
    }
    return i >= j;
};
palindromes("A car, a man, a maraca.");
// Do not edit below this line
module.exports = palindromes;
