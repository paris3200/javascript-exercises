const removeFromArray = function(array, ...args) {
  let filteredArray = [];
  for (const removeItem of args) {
    removeIndex = array.indexOf(removeItem);
    if (removeIndex > -1){
      array.splice(removeIndex, 1);
    };
    filteredArray = array;
  };
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
