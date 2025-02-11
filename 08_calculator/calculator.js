const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function( numbers) {
    const sum = numbers.reduce((total, num) => {
      return total + num
    }, 0)

    return sum
};

const multiply = function(numbers) {
  const product = numbers.reduce((total, num) => {
    return total * num;
  }, 1)
  return product
};

const power = function(base, power) {
  return Math.pow(base, power);
	
};

const factorial = function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }
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
