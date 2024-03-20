let a;
let b;
let operator;
let displayContent = '';
let numberButton = document.querySelectorAll('.number');
let clearButton = document.querySelector('#clear');
let display = document.querySelector('#display');

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a / b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}




function operate (operator, a, b) {
    let plusButton = document.querySelector('#plus');
    let minusButton = document.querySelector('#minus');
    let timesButton = document.querySelector('#times');
    let dividedButton = document.querySelector('#divided');

    if (operator == 'plusButton') {
        plusButton.addEventListener('click', add(a, b));
    }
    if (operator == 'minusButton') {
        minusButton.addEventListener('click', subtract(a, b));        
    }
    if (operator == 'timesButton') {
        timesButton.addEventListener('click', multiply(a,b));        
    }
    if (operator == 'dividedButton') {
        dividedButton.addEventListener('click', divide(a, b));        
    }
}

operate();

function populateDisplay() {
    Array.from(numberButton).forEach(button => {
        button.addEventListener('click', () => {
            display.textContent += button.textContent;
            displayContent += button.textContent;
        })
    })
}

function clearDisplay() {
    clearButton.addEventListener('click', () => {
        display.textContent = '';
        displayContent = '';
    })
}

clearDisplay();
populateDisplay();