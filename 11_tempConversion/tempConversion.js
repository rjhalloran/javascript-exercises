const convertToCelsius = function(temp) {
  if (typeof temp !== 'number') {
    return 'ERROR';
  } else if   (temp < -273.15) {
    return 'ERROR';
  } else {
    return Math.round((temp - 32) * (5 / 9) * 10) / 10; // Convert to Celsius and round to one decimal place
    };
};

const convertToFahrenheit = function(temp) {
  if (typeof temp !== 'number') {
    return 'ERROR';
  } else if (temp < -459.67) {
    return 'ERROR';
  } else {
    return Math.round((temp * (9 / 5) + 32) * 10) / 10; // Convert to Fahrenheit and round to one decimal place
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};