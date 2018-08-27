//dsaddasdasdasda
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

	let deadline = '2018-10-31';

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

// Popup animation
	let browser = detect.parse(navigator.userAgent),
		animationStartBtn = document.querySelector('.more'),
		popup = document.querySelector('.popup');
		
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		alert('Sorre, Вы зашли с мобилки и никакой анимации не будет...');
	} else {
		if(browser.browser.family == 'IE' && browser.browser.family == 'Edge'){
			animationStartBtn.onclick = function () {
				popup.style.cssText = '-webkit-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);-o-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);';
			};
		} else {
			animationStartBtn.onclick = function(){
				let marginLeft = -200,
					marginTop = -200,
					animation = setInterval(appear, 10);
				function appear(){
					if(marginLeft == 0){
						clearInterval(animation);
					} else {
						marginLeft = marginLeft + 1;
						marginTop = marginTop + 1;
						popup.style.cssText = `margin-left: ${marginLeft}px; margin-top: ${marginTop}px`;
					}
				}
			};
		}
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

			let formData = new FormData(form);

			function postData(Data){
				return new Promise(function(resolve,reject){
					let request = new XMLHttpRequest();

					request.open("POST", "../server.php");
					request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

					request.onreadystatechange = function(){
						if (request.readyState < 4){
							resolve();
						} else if(request.readyState === 4){
							if(request.status == 200 && request.status < 300){
								resolve();
								// Добавляем контент на страницу
							}
							else {
								reject();
							}
						}
					};

					request.send(Data);
				});
			}

			function clearInput(){
				for(let i = 0; i < input.length; i++){
					input[i].value = '';
					// Очищаем поля ввода
				}
			}

			postData(formData)
							.then(() => statusMessage.innerHTML = message.loading)
							.then(() => {
								statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
								statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
								setInterval(function(){
									statusMessage.style.cssText = 'display:none';
								}, 1000);
							})
							.catch(() => statusMessage.innerHTML = message.failure)
							.then(clearInput);

		});	
	}

	// Slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot'),
		wrap = document.querySelector('.wrap');

	showSlides(slideIndex);

	function showSlides(n){

		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1) {
			slideIndex = slides.length;
		}

		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = 'none';
		}

		for(let i = 0; i < dots.length; i++){
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}	

	function plusSlides (n) {
		showSlides(slideIndex += n);
	}

	prev.addEventListener('click', function(){
		plusSlides(-1);
		slides[slideIndex - 1].style.cssText = `
			animation: slide-from-right 2s; 
		`;
		wrap.style.cssText = `overflow-x: hidden`;
	});
	next.addEventListener('click', function(){
		plusSlides(1);
		slides[slideIndex - 1].style.cssText = `
			animation: slide-from-left 2s; 
		`;
		wrap.style.cssText = `overflow-x: hidden`;
	});

	function currentSlide (n) {
		showSlides(slideIndex = n);
	}

	dotsWrap,addEventListener('click', function(event){
		for(let i = 0; i < dots.length + 1; i++){
			if(event.target.classList.contains('dot') && event.target == dots[i-1]){
				currentSlide(i);
			} 
		}
	});

	// Calculator

	let persons = document.getElementsByClassName('counter-block-input')[0],
		restDays = document.getElementsByClassName('counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personSum = 0,
		daySum = 0,
		total = 0;

	totalValue.innerHTML = '0';

	persons.onkeyup = function() {
		this.value = this.value.replace( /\D/g, "");
	};
	restDays.onkeyup = function() {
  		this.value = this.value.replace( /\D/g, "");
	};
	
	persons.addEventListener('change', function(){
		personSum = +this.value;
		total = (daySum + personSum) * 40000;
		if(restDays.value == ''){
			totalValue.innerHTML = '0';
		} else {
			for(let i = 0; i <= total; i += 2){
				let numberAnim = setInterval(function(){
					totalValue.textContent = i;
					if(i = total){
						clearInterval(numberAnim);
					}
				}, 500);
			}
		} 
	});
	restDays.addEventListener('change', function(){
		daySum = +this.value;
		total = (daySum + personSum) * 40000;
		if(persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			for(let i = 0; i <= total; i += 2){
				let numberAnim = setInterval(function(){
					totalValue.textContent = i;
					if(i = total){
						clearInterval(numberAnim);
					}
				}, 500);
			}
		}
	});	

	place.addEventListener('change', function(){
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	

	});
	let nullCheck = setInterval(function (){
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = '0';
		} 
	}, 500);
	
});