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


let a;
let b;
let operator;
let displayContent = '';

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
    let numberButton = document.querySelectorAll('.number');
    
    let zeroButton = document.querySelector('#zero');
    let oneButton = document.querySelector('#one');
    let twoButton = document.querySelector('#two');
    let threeButton = document.querySelector('#three');
    let fourButton = document.querySelector('#four');
    let fiveButton = document.querySelector('#five');
    let sixButton = document.querySelector('#six');
    let sevenButton = document.querySelector('#seven');
    let eightButton = document.querySelector('#eight');
    let nineButton = document.querySelector('#nine');
    let display = document.querySelector('#display');

    zeroButton.addEventListener('click', () => {
        display.textContent += '0';
        displayContent += '0';
    })
}

populateDisplay();