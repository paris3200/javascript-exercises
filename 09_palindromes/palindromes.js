const palindromes = function (original) {
  let stripSpaces = original.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g, "");
  filteredString = stripSpaces.toLowerCase();

  let reversedString = filteredString.split("").reverse().join("")

  if (filteredString == reversedString){
    return true;
  }
  return false;
};



// Do not edit below this line
module.exports = palindromes;
