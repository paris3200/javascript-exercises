const convertToCelsius = function(tempFahrenheit) {
  tempCelsius = (tempFahrenheit-32) * 5/9;
  return Math.round(tempCelsius * 10) / 10;

};

const convertToFahrenheit = function(tempCelsius) {
  tempFahrenheit = (tempCelsius * (9/5) +32);
  return Math.round(tempFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
