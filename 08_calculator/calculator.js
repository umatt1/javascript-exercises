const add = function(dig1=0,dig2=0) {
	return dig1+dig2;
};

const subtract = function(dig1=0,dig2=0) {
	return dig1-dig2
};

const sum = function(arr) {
	return arr.reduce(function(accumulator, current){return accumulator+current},0);
};

const multiply = function(arr) {
  return arr.reduce(function(accumulator,current) {return accumulator*current}, 1);
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
