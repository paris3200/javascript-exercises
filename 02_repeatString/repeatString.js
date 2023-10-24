const repeatString = function(string, num) {
  if (num >= 0) {
    let repeatedString = ""
    for (let x = 0; x < num; x++) {
      repeatedString = repeatedString + string;
    }
    return repeatedString;
  }else{
    return "ERROR";
  };
};

// Do not edit below this line
module.exports = repeatString;
