let a = '';
let b = '';
let operation = '';
let result = false;
let arr = [];

const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '+', '*', '/', '%', '√',];


const display = document.querySelector('.calc-input');
console.log(display);

function clear() {
    a = '';
    b = '';
    operation = '';
    result = '';
    display.textContent = 0;
}


document.querySelector('.btn-ac').addEventListener('click', () => {

    clear()
});


document.querySelector('.btn-me').addEventListener('click', () => {
    if (arr == '') {
        arr.push(a);
        console.log(arr)
    }
    a = arr;
    display.textContent = a;
})


document.querySelector('.allButtons').addEventListener('click', (event) => {

    const key = event.target.textContent;

    if (digits.includes(key)) {
        if (b === '' && operation === '') {
            a += key;
            display.textContent = a;
        }

        else if (a !== '' && b !== '' && result) {
            b = key;
            result = false;
            display.textContent = b;
        }

        else {
            b += key;
            display.textContent = b;
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
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                a = a / b;
                break;
            case '%':
                a = a / 100 * b;
                break;
            case '√':
                a = Math.sqrt(b);
                break;
        }

        result = true;
        display.textContent = a;
    }
});







