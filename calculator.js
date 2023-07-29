//calculation functions//

const add = function (a, b) {
    return a + b
};

const minus = function (a, b){
    return a - b
};

const divide = function (a, b) {
    return a / b
};

const multipy = function (a, b) {
    return a * b
};

//operate function//
let operate;
switch (operate) {
    case add:
        operate = add(a,b)
        break;
    case minus:
        operate = minus(a,b)
        break;
    case divide:
        operate = divide(a,b)
        break;
    case multipy:
        operate = multipy(a,b)
        break;
}

//populate display function//

const btns = document.querySelectorAll('button.number, button.op');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const pointButton = document.querySelector('button.decimal');
const topText = document.querySelector('#text-long');
const bottomText = document.querySelector('#text-short');

let equationNumber = 0;
let firstNumber = '';
let secondNumber = '';
let currentOp = null;
let resetScreen = false;

btns.forEach((btn) =>{
    btn.addEventListener('click', () => displayNumber(btn.textContent));
});

function  displayNumber(number){
    if (bottomText.textContent === '0' || resetScreen)
    zeroScreen()
    bottomText.textContent += number
};

function zeroScreen() {
    bottomText.textContent = ''
    resetScreen = false
};

function clear() {
    bottomText.textContent = '0'
    topText.textContent = ''
    firstNumber = ''
    secondNumber = ''
    currentOp = null
}




/*        const equation = document.createElement('p');
    const numberEntered = document.createElement('p');
    numberEntered.textContent = btn.id;
    equation.textContent = 
    bottomText.appendChild(numberEntered);
    });
});*/