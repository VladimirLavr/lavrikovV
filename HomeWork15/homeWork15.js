const h1 = document.createElement('h1');
const p = document.createElement('p');
const input = document.createElement('input');
const btn = document.createElement('button');

h1.innerText = 'Lavrikov Vladimir';
p.innerText = 'HomeWork15';
btn.style.width = '50px';
btn.style.height = '30px';
btn.style.marginLeft = '20px';
btn.innerText = 'button';

document.body.appendChild(h1);
document.body.appendChild(p);
document.body.appendChild(input);
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    alert(input.value);
    input.value = "";
});