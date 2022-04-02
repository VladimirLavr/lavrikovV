const doc = document.getElementById('first');

let arr=[];

alert("Введите цвет телефона в поле, а также выберите с доступных");

const phone = () => {
    
let option = doc.options[doc.selectedIndex].text;

    let cart = {};

    if (document.querySelector('.inp').value === option) {
        const model = prompt('Какой модель телефона вас интересует?', '');
        const memorySize = prompt('Какой обьем памяти телефона вас интересует?', '');
        const hddSize = prompt('Какое количество оперативной памяти телефона вас интересует?', '');
        const osVersion = prompt('Какая операционна система телефона вас интересует?', '');
        const screen = prompt('Какой типа экрана?', '');
        cart.color = option;
        cart.model = model;
        cart.memorySize = memorySize;
        cart.hddSize = hddSize;
        cart.osVersion = osVersion;
        cart.screen = screen;
        arr.push(cart) && console.log(arr);
        return arr;
    } else {
        alert('Вы ничего не выбрали');
    }

};

 
