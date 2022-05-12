let firstNum = '';
let secondNum = '';
let operation = '';
let res = false;
let Mem = '';

const display = document.querySelector('.calc-input');
console.log(display);

function clear() {
    firstNum = '';
    secondNum = '';
    operation = '';
    res = '';
    display.textContent = 0;
}


document.querySelector('.btn-ac').addEventListener('click', () => {
    clear();
})


document.querySelector('.btn-me').addEventListener('click', () => {
    if (firstNum !== '') {
        Mem = firstNum;
    }
    firstNum = Mem;
    display.textContent = firstNum;
})


function nums() {
    if (secondNum === '' && operation === '') {
        firstNum += event.target.textContent;
        display.textContent = firstNum;
    }

    else if (firstNum !== '' && secondNum !== '' && res) {
        secondNum = event.target.textContent;
        res = false;
        display.textContent = secondNum;
    }

    else {
        secondNum += event.target.textContent;
        display.textContent = secondNum;
    }

    return;
}


function operations() {
    operation = event.target.textContent;
    display.textContent = operation;
    return;
}


function result() {
    if (event.target.textContent === '=') {
        switch (operation) {
            case '+':
                firstNum = (+firstNum) + (+secondNum);
                break;
            case '-':
                firstNum = firstNum - secondNum;
                break;
            case '*':
                firstNum = firstNum * secondNum;
                break;
            case '/':
                firstNum = firstNum / secondNum;
                break;
            case '%':
                firstNum = firstNum / 100 * secondNum;
                break;
            case '√':
                firstNum = Math.sqrt(secondNum);
                break;
        }

        res = true;
        display.textContent = firstNum;
    }
}


function check() {
    if (event.target.matches('.btn')) {
        nums();

    } else if (event.target.matches('.operation')) {
        operations();
    }
};


document.querySelector('.allButtons').addEventListener('click', (event) => {

    check();
    result();
});







