let menuList = document.getElementsByClassName('menu-item'),
	menu = document.getElementById('menu'),
	menuItem = document.createElement('div'),
	col = document.body.children[2],
	body = document.getElementById('body'),
	adv = col.children[1],
	apple = prompt('Как вы относитесь к технике Apple?', ''),
	ask = document.getElementById('prompt'),
	title = document.getElementById('title');

menuItem.classList.add('menu-item');
menuItem.innerHTML = 'Пятый пункт';

menu.insertBefore(menuList[2], menuList[1]);

menu.appendChild(menuItem);

body.style.background = 'url(./img/apple_true.jpg) no-repeat';
console.log(adv);

adv.remove();

ask.appendChild(document.createTextNode(apple));

title.innerHTML = 'Наша компания продает только подлинную технику Apple';



