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
    if (operator === '/' && b === 0) {
        return 'nope!'
    }else {
        return Math.round(((operator === '+') ? add(a, b) : 
        (operator === '-') ? subtract(a, b) : 
        (operator === '*') ? multiply(a, b) :
        (operator === '/') ? divide(a, b) : 0)*100)/100;
    }
   
}

function displayOperation(val) {
    currentSelDisplay.textContent = val;
}

function displayTotal(){
    result.textContent = total;
}

function storeNum() {
    if (firstNum === 0 && secondNum === 0 ){
        firstNum = parseFloat(displayValue);
    }else if (secondNum === 0){
        secondNum = parseFloat(displayValue);
    }else if(total !== 0){
        firstNum = total;
        secondNum = 0;
    }
}

function evaluateOperation() {
    if (firstNum && secondNum) {
        total = operate(operator, firstNum, secondNum);
        firstNum = total;
        total = 0;
        secondNum = 0;
    }
}

const numPad = document.querySelectorAll('.number');
const currentSelDisplay = document.querySelector('.current');

let displayValue = 0;

numPad.forEach((num) => {
    num.addEventListener('click', () => {
        (displayValue === 0) ? displayValue = num.textContent : 
        displayValue += num.textContent;
        displayOperation(displayValue);
    })
})

const operatorBtns = document.querySelectorAll('.operator');

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        storeNum();
        displayValue = 0; //reset displayValue to prepare for secondNum
        evaluateOperation();
        operator = btn.textContent;
        displayOperation(operator);
    })
})

const equalSign = document.querySelector('.equal-sign');
const result = document.querySelector('.result')

let total = 0;
equalSign.addEventListener('click', () => {
    storeNum();
    total = operate(operator, firstNum, secondNum);
    displayTotal();
})

const acButton = document.querySelector('.ac');
acButton.addEventListener('click', () => {
    total = 0;
    firstNum = 0;
    secondNum = 0;
    displayValue = 0;
    displayOperation(0);
    displayTotal();
})

const percentButton = document.querySelector('.percent');

percentButton.addEventListener('click', percentMultiply);

function percentMultiply() {
    displayValue = displayValue / 100;
    displayOperation(displayValue);
}

window.addEventListener('keypress', (e) => {
    e.preventDefault();
    switch (e.key) {
        case 'Enter' : equalSign.click();
        break;
        case '%': percentButton.click();
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
