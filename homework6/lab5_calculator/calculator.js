var firstNumber = document.querySelector (".first-operhand");
var secondNumber = document.querySelector (".second-operand");
var result = document.querySelector (".result");

var addButton = document.querySelector (".add-button");
var substractButton = document.querySelector (".substract-button");
var multiply = document.querySelector ("multiply-button");
var divide = document.querySelector ("divide-botton");

addButton.addEventListener ("click", add);
substractButton.addEventListener ("click", subtract);
multiply.addEventListener ("click", multiply);
divide.addEventListener ("click" divide);

function add () {
  result.value = parseFloat(firstNumber.value) + parseFloat (secondNumber.value);
}

function subtract () {
  result.value = parseFloat(firstNumber.value) - parseFloat (secondNumber.value);
}

function multiply () {
  result.value = parseFloat(firstNumber.value) * parseFloat (secondNumber.value);
}

function divide () {
  result.value = parseFloat(firstNumber.value) / parseFloat (secondNumber.value);
}
