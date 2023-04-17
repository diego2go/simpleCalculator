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

let firstNum = 0;
let operator = '+' ;
let secondNum = 0; 

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
    })
})

const operatorBtns = document.querySelectorAll('.operator');

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        firstNum = parseFloat(displayValue);
        displayValue = 0; //reset displayValue to prepare for secondNum
        operator = btn.textContent;
        currentSelDisplay.textContent = firstNum + ' ' + operator;
    })
})

const equalSign = document.querySelector('.equal-sign');
const result = document.querySelector('.result')

equalSign.addEventListener('click', () => {
    secondNum = parseFloat(displayValue);
    let total = operate(operator, firstNum, secondNum);
    firstNum = total;
    result.textContent = total;
})

const acButton = document.querySelector('.ac');
acButton.addEventListener('click', () => {
    firstNum = 0;
    secondNum = 0;
    displayValue = 0;
    currentSelDisplay.textContent = 0;
    result.textContent = 0;
})
