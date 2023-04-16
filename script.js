function add (a,b) {
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}

let firstNum = 0; //for initial testing. to be set document.querySelector('.firstNum')
let operator = '+' ; //for initial testing. to be set document.querySelector('.operator')
let secondNum = 0; //for initial testing. to be set document.querySelector('.secondNum')

function operate (operator, a, b) {
    return (operator === '+') ? add(a, b) : 
    (operator === '-') ? subtract(a, b) : 
    (operator === '*') ? multiply(a, b) :
    (operator === '/') ? divide(a, b) : 0;
    // Same as 
    // if (operator === '+') return add(a, b); // for each op...
}

const displayNum = document.querySelectorAll('.number');
const currentSelDisplay = document.querySelector('.current');

let displayValue = 0;

displayNum.forEach((num) => {
    num.addEventListener('click', () => {
        (displayValue === 0) ? displayValue = num.textContent : 
        displayValue += num.textContent;
        currentSelDisplay.textContent = displayValue;
        firstNum = parseFloat(displayValue);
    })
})

const operatorBtns = document.querySelectorAll('.operator');

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        operator = btn.textContent;
    })
})
