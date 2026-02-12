let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    previousInput = '';
    operator = null;
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    previousInput = '';
    operator = null;
}
