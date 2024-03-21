let firstNum = '';
let secondNum = '';

let displayValue = '';
let currentNumber = '';
let previousNumber = '';
let operator = '';
let total = '';

let numbers = document.querySelectorAll('.number');
let decimal = document.querySelector('#decimal')
let operators = document.querySelectorAll('.operator');
let clearButton = document.querySelector('#clear');
let display = document.querySelector('#display');

function add (firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract (firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply (firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide (firstNum, secondNum) {
    if (secondNum != 0) {
        return firstNum / secondNum;
    }
    else {
        firstNum = 'ERROR';
    }
}




function operate (operator, firstNum, secondNum) {
    

    if (operator = '+') {
        return add(firstNum, secondNum);
    }
    else if (operator = '-') {
        return subtract(firstNum, secondNum);
    }
    else if (operator = '*') {
        return multiply(firstNum, secondNum);
    }
    else if (operator = '/') {
        return divide(firstNum, secondNum);
    }
    else {
        return Error;
    }
}

function recordNumber(input) {
    currentNumber += input;
}

function recordOperator(input) {
    if (previousNumber == '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = input;
    }
    else if (currentNumber = '') {
        operator = input;
    }
    else {
        total = operate(operator, +previousNumber, +currentNumber);
        previousNumber = total;
        currentNumber = '';
        operator = input;
    }
}

function recordFloat(input) {
    if (currentNumber == '') {
        currentNumber = '0.';        
    }
    else if (currentNumber.includes('.')) {

    }
    else {
        currentNumber += '.';
    }
}

function recordTotal(input) {
    if (currentNumber != '' && previousNumber != '' && operator != '') {
        total = operate(operator, +previousNumber, +currentNumber);
        previousNumber = total;
        operator = '=';
        currentNumber = '';
    }
}

function clearMemory() {
    previousNumber = '';
    currentNumber = '';
    operator = '';
    total = '';
}

function getInput(input) {
    // Function to record the eventListeners and store them in a correct variable
    
        let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let operations = ["+", "-", "*", "/"];
        let equal = ["=", "Enter"];
        let clear = ["clear"];
        let float = ["."];
    
        if (numbers.includes(input)) {
    
            // Record all the digits entered by the user to a single number
            recordNumber(input);
        } 
        else if (float.includes(input)) {
    
            // Add a floating point number
    
            recordFloat(input);
        }
        else if (operations.includes(input)) {
    
            // Record the operator entered by the user in a global variable
            recordOperator(input);
        }
        else if (equal.includes(input)) {
    
            // Record the total of the operation
            recordTotal(input);
        }
        else if (clear.includes(input)) {
            clearMemory();
        }
    }


function displayResults() {
    let currentNumberToDisplay = '';

    if (total !='' && currentNumber == '' && operator == '=') {
        currentNumberToDisplay = total;        
    }
    else if (currentNumber != '') {
        currentNumberToDisplay = currentNumber;
    }
    //to avoid long numbers
    currentNumberToDisplay = currentNumberToDisplay.toString();

    if (currentNumberToDisplay.length > 8) {
        currentNumberToDisplay = currentNumberToDisplay.slice(0, 8);
    }

    //to update text content
    document.querySelector('#current-number').textContent = currentNumberToDisplay;
    document.querySelector('#top-row').textContent = previousNumber;
    document.querySelector('#operator').textContent = operator;

    if (currentNumberToDisplay == total && operator == '=') {
        document.querySelector('#top-row').textContent = '';
    }
}
// input for buttons

buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let input = event.target.value;
        getInput(input);
        displayResults();
    })
})

// input for keyboard

document.addEventListener('keypress', (event) => {
    let input = event.key;
    getInput(input);
    displayResults();
})

