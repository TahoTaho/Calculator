const display = document.querySelector('input.calculator-screen');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const addButton = document.getElementById('add');
const minusButton = document.getElementById('subtract');

let input1;
let input2;
let selectedOperator;
let buttonClicked = false;


addButton.addEventListener('click', (e) => {
    if (input1 != null && input2 === null) {
        input2 = parseInt(display.value);
        console.log('Input2: '+input2);
        const result = operate(input1,input2,selectedOperator);
        display.value = result;
        input1 = result;
    }
    else {
        input1 = parseInt(display.value);
        console.log('Input1: ' + input1);
        console.log('Input2: ' + input2);
        selectedOperator = '+';
    }
    buttonClicked = true;
    console.log('Button is clicked: ' + buttonClicked);

});

minusButton.addEventListener('click', () => {
    if (input1 == null) {
        input1 = parseInt(display.value);
        console.log(input1);
        console.log(input2);
    }
    else {
        const result = operate(input1,input2,selectedOperator);
        display.value = result;
        input1 = result;
        input2 = null;

        console.log(input1);
        console.log(input2);
        console.log(operate(input1,input2,selectedOperator));
    }
    display.value = '';
    selectedOperator = '-';
})

equalButton.addEventListener('click', () => {
    if (input1 != null) {
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
        console.log('Button is clicked: '+ buttonClicked)
        display.value += clickedButtonValue;
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



