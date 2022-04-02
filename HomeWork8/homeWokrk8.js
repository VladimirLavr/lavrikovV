let doc = document.getElementById('first');

let phoneDescriptin = {
    color:'',
    model: 'Какой модель телефона вас интересует?',
    memorySize: 'Какой обьем памяти телефона вас интересует?',
    hddSize: 'Какое количество оперативной памяти телефона вас интересует?',
    osVersion: 'Какая операционна система телефона вас интересует?',
    screen: 'Какой типа экрана?',
};

let cart = {};

let newCart = [];

alert("Введите цвет телефона в поле, а также выберите с доступных");

const phone = () => {
    if (document.querySelector('.inp').value === doc.options[doc.selectedIndex].text) {
        cart.color = doc.options[doc.selectedIndex].text;
        const searchModel = prompt(`${phoneDescriptin.model}`, "");
        const searchMemorySize = prompt(`${phoneDescriptin.memorySize}`, "");
        const searchhddSize = prompt(`${phoneDescriptin.hddSize}`, "");
        const searcOsVersion = prompt(`${phoneDescriptin.osVersion}`, "");
        const searchScreen = prompt(`${phoneDescriptin.screen}`,"");
        cart.model = searchModel;
        cart.memorySize = searchMemorySize;
        cart.hddSize = searchhddSize;
        cart.osVersion = searcOsVersion;
        cart.screen = searchScreen;

        newCart.push(cart);

        console.log(newCart);

    } else alert('Вы ничего не выбрали');
};


