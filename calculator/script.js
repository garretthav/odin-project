
/* TODO
- Handle a single decimal point in calculations
- Handle multiple calculations without requiring user to press "=" after each one
- Clean up the styling
*/

const display = document.querySelector('#display');
let firstValue = 0;
let secondValue = 0;
let operand = '';

function add(x,y) {
    return x+y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function operate(operator,x,y) {
    if (operator == '+') {
        return add(x,y);
    } else if (operator == '-') {
        return subtract(x,y);
    } else if (operator == '*') {
        return multiply(x,y);
    } else if (operator == '/') {
        return divide(x,y);
    } else return 'no valid operator given';
}

function updateDisplay() {
    display.textContent += this.value;
}

function storeFirstValue() {
    firstValue = parseInt(display.textContent);
}

function storeSecondValue() {
    secondValue = parseInt(display.textContent.slice(-1));
}

function storeOperand() {
    operand = this.value;
}

function displaySolution() {
     display.textContent = operate(operand, firstValue, secondValue);
}

function clearDisplayAndValues() {
    display.textContent = '';
    firstValue = 0;
    secondValue = 0;
    operand = ''
}

const numButtons = document.querySelectorAll('.number');
for (const button of numButtons) {
    button.addEventListener('click', updateDisplay);
}

const actionButtons = document.querySelectorAll('.action');
for (const button of actionButtons) {
    button.addEventListener('click', storeFirstValue);
    button.addEventListener('click', storeOperand);
    button.addEventListener('click', updateDisplay);
}

const equalButton = document.querySelector('#bequal');
equalButton.addEventListener('click', storeSecondValue);
equalButton.addEventListener('click', displaySolution);
equalButton.addEventListener('click', storeFirstValue);

const clearButton = document.querySelector('#bclear');
clearButton.addEventListener('click', clearDisplayAndValues);