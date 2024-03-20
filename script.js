function add (a, b) {
    return a + b;
}

function substract (a, b) {
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

function operate (operator, a, b) {
    let plusButton = document.querySelector('#plus');
    let minusButton = document.querySelector('#minus');
    let timesButton = document.querySelector('#times');
    let dividedButton = document.querySelector('#divided');

    if (operator == 'plusButton') {
        plusButton.addEventListener('click', add(a, b));
    }
    if (operator == 'minusButton') {
        minusButton.addEventListener('click', substract(a, b));        
    }
    if (operator == 'timesButton') {
        timesButton.addEventListener('click', multiply(a,b));        
    }
    if (operator == 'dividedButton') {
        dividedButton.addEventListener('click', divide(a, b));        
    }
}

operate();