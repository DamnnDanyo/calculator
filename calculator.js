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



const btns = document.querySelectorAll('button');
const topText = document.querySelector('#text-long');
const bottomText = document.querySelector('#text-short');

btns.forEach((btn) =>{
    btn.addEventListener('click', () => {
    const equation = document.createElement('p');
    const numberEntered = document.createElement('p');
    numberEntered.textContent = btn.className;
    equation.textContent = 
    topText.appendChild(numberEntered);
})
})
