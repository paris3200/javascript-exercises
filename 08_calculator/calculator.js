const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function( array) {
  let sum = 0;
  for (const item of array){
    sum += item;
  }
  return sum
};

const multiply = function(array) {
  let product = 1;
  for (const item of array){
    product *= item;
  }
  return product
};

const power = function() {
	
};

const factorial = function() {
	
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
