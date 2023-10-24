const reverseString = function(inputString) {
  let stringArray = inputString.split("");
  let reversedArray = stringArray.reverse();
  let reversedString =  reversedArray.join("")
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
