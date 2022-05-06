let firstNum = '';
let secondNum = '';
let operation = '';
let result = false;
let Mem = '';

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', '*', '/', '%', '√',];


const display = document.querySelector('.calc-input');
console.log(display);

function clear() {
    firstNum = '';
    secondNum = '';
    operation = '';
    result = '';
    display.textContent = 0;
}


document.querySelector('.btn-ac').addEventListener('click', () => {
    clear();
});


document.querySelector('.btn-me').addEventListener('click', () => {
    if (firstNum === '') {
        display.textContent = Mem;
    } else if (firstNum !== '') {
        Mem = firstNum;
    }
    firstNum = Mem;
    display.textContent = firstNum;
})


document.querySelector('.allButtons').addEventListener('click', (event) => {

    const key = event.target.textContent;

    if (digits.includes(key)) {
        if (secondNum === '' && operation === '') {
            firstNum += key;
            display.textContent = firstNum;
        }

        else if (firstNum !== '' && secondNum !== '' && result) {
            secondNum = key;
            result = false;
            display.textContent = secondNum;
        }

        else {
            secondNum += key;
            display.textContent = secondNum;
        }

        return;
    }



    if (action.includes(key)) {
        operation = key;
        display.textContent = operation;
        return;
    }

    if (key === '=') {
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

        result = true;
        display.textContent = firstNum;
    }
});







