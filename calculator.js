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