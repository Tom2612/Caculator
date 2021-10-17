let num1 = null;
let num2 = null;
let operator = null;
let result = null;
let clear = false;
const displayBottom = document.querySelector('.bottom');
const equal = document.querySelector('#equal');
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');

function add(a, b) { return a + b };
function subtract(a, b) { return a - b };
function multiply(a, b) { return a * b };
function divide(a, b) { return a / b };

function operation(a, b, o) {
    if (o === 'add') {
        return add(a, b);
    } else if (o === 'subtract') {
        return subtract(a, b);
    } else if (o === 'multiply') {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
};

function setDisplay(value) {
    displayBottom.textContent = displayBottom.textContent + value;
};

//get the bottom display value
function getDisplay() {
    return displayBottom.textContent;
};

function clearDisplay() {
    displayBottom.textContent = '';
};

//Assign num values
function setNumbers(value) {
    if (num1 == null) {
        num1 = value;
    } else {
        num2 = value;
    }
};

function setOperator(value) {
    if (operator == null) {
        operator = value;
    } else if (num1 && num2) {
        //do the current operation
        result = operation(Number(num1), Number(num2), operator);
        clearDisplay();
        setDisplay(result);
        num1 = result;
        num2 = null;
        operator = value;
    }
};

function getResult() {
    if (num1 && operator && !clear && !num2) {
        setNumbers(getDisplay());
        return operation(Number(num1), Number(num2), operator);
    } else {
        return false;
    }
};

//Add number button listeners here
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (clear) {
            clearDisplay();
        }
        setDisplay(e.target.textContent);
        clear = false;
    })
});

//Add store operation here
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        setNumbers(getDisplay());
        setOperator(e.target.id);
        clear = true;
    })
});

//Add equal input here
equal.addEventListener('click', () => {
    result = getResult();
    clearDisplay();
    if (result) {
        setDisplay(result);
    }
});
