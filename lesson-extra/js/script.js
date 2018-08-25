import "babel-polyfill";

window.addEventListener('DOMContentLoaded', () => {

// Tabs	

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];
	function hideTabContent (a) {
			for(let i = a; i < tabContent.length; i++){
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}	

	hideTabContent(1);
	
	function showTabContent (b) {
		if( tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		let target = event.target;
		if(target.className == 'info-header-tab'){
			for(let i = 0; i < tab.length; i++){
				if(target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}
	});	

// Timer

	let deadline = '2018-08-25';

	function getTimeRemaining (endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/1000/60) % 60),
			hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock (id, endTime) {
		
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds= timer.querySelector('.seconds');

		

		function updateClock () {
			let t = getTimeRemaining(endTime);

			hours.innerHTML = t.hours;
			if(hours.innerHTML < 10){
				hours.innerHTML = `0${hours.innerHTML}`;
			}
			
			minutes.innerHTML = t.minutes;
			if(minutes.innerHTML < 10){
				minutes.innerHTML = `0${minutes.innerHTML}`;
			}

			seconds.innerHTML = t.seconds;
			if(seconds.innerHTML < 10){
				seconds.innerHTML = `0${seconds.innerHTML}`;
			}
		let timeInterval = setInterval(updateClock, 1000);	
			if(t.total <= 0){
				clearInterval(timeInterval);
				hours.innerHTML = '0' + '0';
				minutes.innerHTML = '0' + '0';
				seconds.innerHTML = '0' + '0';
			}
		}

		updateClock();

		

	}

	setClock('timer', deadline);

// Smooth scrolling

	(function(){ // Code in a function to create an isolate scope

	let speed = 500,
		moving_frequency = 15, 
		links = document.querySelectorAll('li a'),
		href;

	for(let i=0; i<links.length; i++)
	{   
	    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
	    if(href !== null && href.length > 1 && href.substr(0, 1) == '#'){  
	        links[i].onclick = function(){
	            let element;
	            let href = this.attributes.href.nodeValue.toString();
	            element = document.getElementById(href.substr(1));
	                let hop_count = speed/moving_frequency;
	                let getScrollTopDocumentAtBegin = getScrollTopDocument();
	                let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

	                for(let i = 1; i <= hop_count; i++){
	                    (function() {
	                        let hop_top_position = gap*i;
	                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
	                    })();
	                }
	            

	            return false;
	        };
	    }
	}

	let getScrollTopElement =  function (e)
	{
	    let top = 0;

	    while (e.offsetParent != undefined && e.offsetParent != null)
	    {
	        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
	        e = e.offsetParent;
	    }

	    return top;
	};

	let getScrollTopDocument = function()
	{
	    return document.documentElement.scrollTop + document.body.scrollTop;
	};

})();


// Modal showing for timer

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'); 

	more.addEventListener('click', function  () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});	
	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});	

// Modal showing for tabs

	let length = document.querySelectorAll('.description-btn').length;
	for(let i = 0; i < length; i++){
		let more = document.querySelectorAll('.description-btn')[i],
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'); 

	more.addEventListener('click', function  () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});	
	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	}	


// Class

	class options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		newBlock (){
			let div = document.createElement('div');
			div.innerHTML = 'This text shouldnt be good and it is';
			div.style.cssText = `
				height: ${this.height}px;
				width: ${this.width}px;
				background: ${this.bg};
				font-size: ${this.fontSize}px;
				text-align: ${this.textAlign};
			`;
			document.body.appendChild(div);
		}
	}

	const Div = new options(100, 1000, '#fff', 32, 'center');

	Div.newBlock();

// Form modal
	
	let message = {},
		formArr = document.getElementsByClassName('main-form');
		

		}
	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';


	for(let y = 0; y < formArr.length; y++){
		let	form = formArr[y],
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

		
		form.addEventListener('submit', function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX

			let request = new XMLHttpRequest();

			request.open("POST", "../server.php");
			request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

			let formData = new FormData(form);

			request.send(formData);
			promise = new Promise( function(resolve, reject){
					if (request.readyState < 4){
						statusMessage.innerHTML = message.loading;
					} else if(request.readyState === 4){
						if(request.status == 200 && request.status < 300){
							resolve({});
							// statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
							// statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
							// setInterval(function(){
							// 	statusMessage.style.cssText = 'display:none';
							// }, 1000);
							// Добавляем контент на страницу
						}
						else {
							reject({});
							// statusMessage.innerHTML = message.failure;
						}
					}
				}
			);
			request.onreadystatechange = promise
												.then(statusMessage.innerHTML = '<img src="img/success.png" alt="Success">')
												.then(statusMessage.style.cssText = 'text-align: center; margin-top: 15px')
												.then(setInterval(function(){
													statusMessage.style.cssText = 'display:none';
												}, 1000))
												.catch(statusMessage.innerHTML = message.failure)
			for(let i = 0; i < input.length; i++){
				input[i].value = '';
				// Очищаем поля ввода
			}
		});	
	}

// Main Form
	

});