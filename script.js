const display = document.querySelector('input.calculator-screen');
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearScreen);

window.addEventListener("load", addButtonListener);


function addButtonListener() {  
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            getButtonValue(e.target);
        });
    });
};

function getButtonValue (element) {
    let clickedButtonValue = element.value;
    if (display.value === '0') {
        display.value = clickedButtonValue;
    }
    else {
    display.value += clickedButtonValue;
    }
}

function clearScreen() {
    display.value = '0';
}

function operate(num1, num2, operator) {
    
}

function add(addend1, addend2) {
    const sum = addend1 + addend2;
    return sum;
}

function subtract(minuend, subtrahend) {
    const difference = minuend - subtrahend;
    return difference;
}

function multiply(multiplicand, multiplier) {
    const product = multiplicand * multiplier;
    return product;
}

function divide(dividend, divisor) {
    const quotient = dividend / divisor;
    return quotient;
}



