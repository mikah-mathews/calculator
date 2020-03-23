var add = function(number1, number2) {
    return number1 + number2;
  };
  
var subtract = function(number1, number2) {
    return number1 - number2;
};

var multiply = function(number1, number2) {
    return number1 * number2;
};

var divide = function(number1, number2) {
    return number1 / number2;
};

var number1 = parseInt(prompt("Pick a number:"));
var number2 = parseInt(prompt("Pick another number:"));

var addresult = add(number1, number2);
var subresult = subtract(number1, number2);
var mulresult = multiply(number1, number2);
var divresult = divide(number1, number2);

alert(addresult);
alert(subresult);
alert(mulresult);
alert(divresult);

