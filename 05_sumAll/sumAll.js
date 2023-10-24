const sumAll = function(startInt, endInt) {
  if (
    startInt < 0 ||
    endInt < 0 ||
    typeof startInt != 'number' ||
    typeof endInt != 'number'
  )
    return 'ERROR'

  let lowerInt = Math.min(startInt, endInt);
  let upperInt = Math.max(startInt, endInt);

  sum = 0;
  for (let x = lowerInt; x <= upperInt; x++){
    sum = sum + x;
  };

  return sum;

};

// Do not edit below this line
module.exports = sumAll;
