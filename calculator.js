

//populate display function//

const btns = document.querySelectorAll('button.number');
const opBtns = document.querySelectorAll('button.op');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');
const pointButton = document.querySelector('button.decimal');
const equalButton = document.querySelector('button.equal')
const topText = document.querySelector('#text-long');
const bottomText = document.querySelector('#text-short');

let equationNumber = 0;
let firstNumber = '';
let secondNumber = '';
let currentOp = null;
let resetScreen = false;

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', backspace);
pointButton.addEventListener('click', setPoint);
equalButton.addEventListener('click', evaluate);


btns.forEach((btn) =>{
    btn.addEventListener('click', () => displayNumber(btn.textContent))
});

opBtns.forEach((opBtn) => {
    opBtn.addEventListener('click', () => setOp(opBtn.textContent))
});

function displayNumber(number){
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
};

function setPoint() {
    if (resetScreen) zeroScreen()
    if (bottomText.textContent === '')
        bottomText.textContent = '0'
    if (bottomText.textContent.includes('.')) return 
        bottomText.textContent += '.'
};

function backspace() {
    bottomText.textContent = bottomText.textContent.toString().slice(0, -1)
};

function setOp(operator) {
    if (currentOp !== null) evaluate()
        firstNumber = bottomText.textContent
        currentOp = operator
        topText.textContent = `${firstNumber} ${currentOp}` 
        resetScreen = true
};

function evaluate() {
    if(currentOp === null || resetScreen) return
    if(currentOp === '÷' && bottomText.textContent === '0'){
    alert ("You can't divide by 0");
    return
    };
    secondNumber = bottomText.textContent
    bottomText.textContent = roundNumber(operate(currentOp, firstNumber, secondNumber))
    topText.textContent = `${firstNumber} ${currentOp} ${secondNumber} =`
        currentOp = null
       
};

function roundNumber(number) {
    return Math.round(number * 1000) / 1000
  };

//operate function//
function operate (operator, a, b){
    a = Number(a)
    b = Number(b)
switch (operator) {
    case '+' :
        return add(a,b)
    case '-':
        return minus(a,b)
    case 'x':
            return multipy(a,b)
    case '÷':
        if (b === '0') return null
        else return divide(a,b)
        default:
            return null
        }
    }

//calculation functions//

function add(a, b) {
   return a + b
};

function minus(a, b){
    return a - b
};

function divide(a, b) {
    return a / b
};

function multipy(a, b) {
    return a * b
};
