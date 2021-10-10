const topScreenText = document.querySelector('.top');
topScreenText.textContent = '';

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operation(num1, operator, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
};

let display = document.querySelector('.bottom');
display.textContent = '0000';