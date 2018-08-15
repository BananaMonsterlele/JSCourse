let menuList = document.getElementsByClassName('menu-item');
let	menu = document.getElementById('menu');
let	menuItem = document.createElement('div');
let	col = document.body.children[2];
let	body = document.getElementById('body');
let adv = col.children[1];
let apple = prompt('Как вы относитесь к технике Apple?', '');
let ask = document.getElementById('prompt');
let title = document.getElementById('title');

menuItem.classList.add('menu-item');
menuItem.innerHTML = 'Пятый пункт';

menu.insertBefore(menuList[2], menuList[1])

menu.appendChild(menuItem);

body.style.background = 'url(./img/apple_true.jpg) no-repeat';
console.log(adv);

adv.remove();

ask.appendChild(document.createTextNode(apple));

title.innerHTML = 'Наша компания продает только подлинную технику Apple';



