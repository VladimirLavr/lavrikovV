
let result = document.querySelector('.result');


function min() {

    result.textContent = result.textContent - 1;
}

function plus() {

    result.textContent = +result.textContent + 1;
}
function res() {

    result.textContent = 0;

}

function resColor() {
    if (result.textContent < 0) {
        result.style.backgroundColor = '#e89a9a';
    } else if (result.textContent > 0) {
        result.style.backgroundColor = '#83df97';
    } else result.style.backgroundColor = 'gainsboro';
}

document.querySelector('.minus').addEventListener('click', (event) => {
    min();
    resColor();

})

document.querySelector('.plus').addEventListener('click', () => {
    plus();
    resColor();
})

document.querySelector('.Reset').addEventListener('click', () => {
    res();
    resColor();
})
