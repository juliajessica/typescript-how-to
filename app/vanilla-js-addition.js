// var firstNumber = prompt('Please enter a number:');
// var secondNumber = prompt('Please enter another number:');
// var sum = firstNumber + secondNumber;
// alert('The sum of your two numbers is: ' + sum);

var findSum = function(first, second){
  var sum = first + second;
  alert("The sum of your two numbers are: " + sum);
}

var number = parseInt(prompt('please enter a number.'));
var otherNumber = parseInt(prompt('enter another number.'));
findSum(number, otherNumber);
