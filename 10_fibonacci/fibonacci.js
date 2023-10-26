const fibonacci = function(num) {
  if (isNaN(num) == true || num < 0){
    return "OOPS"
  };
  let n1 = 1;
  let n2 = 0;
  for (let x=1; x < num; x += 1){
    let n = n1 + n2;
    n2 = n1;
    n1 = n;
  };
  return n1;
  }
  
// Do not edit below this line
module.exports = fibonacci;
