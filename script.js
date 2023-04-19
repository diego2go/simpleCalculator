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
    return (b === 0) ? "nope!" :a / b;
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
    let total = Math.round((operate(operator, firstNum, secondNum)*1000))/1000;
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

const numPad = document.querySelectorAll('.number');

window.addEventListener('keypress', (e) => {
    e.preventDefault();
    switch (e.key) {
        case 'Enter' : equalSign.click();
        break;
        case '/' : operatorBtns[0].click();
        break;
        case '*' : operatorBtns[1].click();
        break;
        case '-' : operatorBtns[2].click();
        break;
        case '+' : operatorBtns[3].click();
        break;
        case '1': numPad[6].click();
        break;
        case '2': numPad[7].click();
        break;
        case '3': numPad[8].click();
        break;
        case '4': numPad[3].click();
        break;
        case '5': numPad[4].click();
        break;
        case '6': numPad[5].click();
        break;
        case '7': numPad[0].click();
        break;
        case '8': numPad[1].click();
        break;
        case '9': numPad[2].click();
        break;
        case '0': numPad[9].click();
        break;
        case '.': numPad[10].click();
        break;
        default: return;
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        e.preventDefault();
        acButton.click();
    }
})
