// var firstNumber: number = parseInt(prompt('Please enter a number.'));
// var secondNumber: number = parseInt(prompt('Enter another number.'));
// var sum: number = firstNumber + secondNumber;
// alert("The sum of your two numbers is: " + sum);
var findSum = function (firstValue, secondValue) {
    var sum = firstValue + secondValue;
    alert("The sum of your two numbers is: " + sum);
};
var firstNumber = parseInt(prompt("Please enter a number."));
var secondNumber = parseInt(prompt("Please enter another number."));
findSum(firstNumber);
