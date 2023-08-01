const display = document.querySelector('input.calculator-screen');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const addButton = document.getElementById('add');
const minusButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');

let input1;
let input2;
let selectedOperator;
let buttonClicked = false;


addButton.addEventListener('click', () => {
    if (input1 != null && input2 === null) {
        input2 = parseInt(display.value);
        console.log('Input1: ' + input1)
        console.log('Input2: '+ input2);
        const result = operate(input1,input2,selectedOperator);
        display.value = result;
        input1 = result;
    }
    else {
        input1 = parseInt(display.value);
        console.log('(N)Input1: ' + input1);
        console.log('(N)Input2: ' + input2);
    }
    selectedOperator = '+';
    buttonClicked = true;
});

minusButton.addEventListener('click', () => {
    if (input1 != null && input2 === null) {
        input2 = parseInt(display.value);
        console.log('Input1: ' + input1)
        console.log('Input2: '+ input2);
        const result = operate(input1,input2,selectedOperator);
        display.value = result;
        input1 = result;
    }
    else {
        input1 = parseInt(display.value);
        console.log('(N)Input1: ' + input1);
        console.log('(N)Input2: ' + input2);
    }
    selectedOperator = '-';
    buttonClicked = true;
})

multiplyButton.addEventListener('click', () => {
    if (input1 != null && input2 === null) {
        input2 = parseInt(display.value);
        console.log('Input1: ' + input1)
        console.log('Input2: '+ input2);
        const result = operate(input1,input2,selectedOperator);
        display.value = result;
        input1 = result;
    }
    else {
        input1 = parseInt(display.value);
        console.log('(N)Input1: ' + input1);
        console.log('(N)Input2: ' + input2);
    }
    selectedOperator = '*';
    buttonClicked = true;
});

divideButton.addEventListener('click', () => {
    if (input1 != null && input2 === null) {
        input2 = parseInt(display.value);
        console.log('Input1: ' + input1)
        console.log('Input2: '+ input2);
        const result = operate(input1,input2,selectedOperator);
        display.value = result;
        input1 = result;
    }
    else {
        input1 = parseInt(display.value);
        console.log('(N)Input1: ' + input1);
        console.log('(N)Input2: ' + input2);
    }
    selectedOperator = '/';
    buttonClicked = true;
});

equalButton.addEventListener('click', () => {
    if (input1 != null && input2 === null) {
        input2 = parseInt(display.value);
        console.log('I(=)Input2: ' + input2);
        const result = operate(input1,input2,selectedOperator);
        display.value = result;
        input1 = result;
        console.log('I(=)Input1: ' + input1)
    }
});


clearButton.addEventListener('click', clearScreen);
window.addEventListener("load", addButtonListener);

function addButtonListener() {  
    const buttons = document.querySelectorAll('button.calculator-numpad.number-key')
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            getButtonValue(e.target);
        });
    });
};

function getButtonValue(element) {
    let clickedButtonValue = element.value;
    if (display.value === '0') {
        display.value = clickedButtonValue;
    }
    else if (buttonClicked === true) {
        display.value = null;
        buttonClicked = false;
        display.value += clickedButtonValue;
        input2 = null;
    }
    else {
    display.value += clickedButtonValue;
    }
}

function clearScreen() {
    display.value = '0';
    input1 = null;
    input2 = null;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1,num2);
        default: return 'Operetor does not exist';
    }
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



