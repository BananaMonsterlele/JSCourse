/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

//dsaddasdasdasda
window.addEventListener('DOMContentLoaded', () => {

// Tabs	

	let tab = __webpack_require__(1);	
	tab();

// Smooth scrolling

	let smoothScrolling = __webpack_require__(2);
	smoothScrolling();

// Modal showing for timer

	let modal = __webpack_require__(3);
	modal();
		
// Popup animation
	
	let popupAnimation = __webpack_require__(4);
	popupAnimation();

// Class

	let classFoo = __webpack_require__(5);
	classFoo();

// Form modal
	
	let ajax = __webpack_require__(6);
	ajax ();

// Slider

	let slider = __webpack_require__(7);
	slider();

// Calculator

	let calculator = __webpack_require__(8);
	calculator();

// Timer
	
	let timer = __webpack_require__(9);
	timer();	
	
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function tab(){

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

}

module.exports = tab;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function smoothScrolling () {
	function animate (draw, duration) {
		let start = performance.now();

		requestAnimationFrame(function animate(time){
			let timePassed = time - start;
			if(timePassed > duration) timePassed = duration;
			draw(timePassed);
			if(timePassed < duration){
				requestAnimationFrame(animate); 
			} 
		})
	}

	let nav = document.querySelector('nav');

	nav.addEventListener('click', function  (event) {
		event.preventDefault();
		animate(function(timePassed){
			let target = event.target,
				section = document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0, section.getBoundingClientRect().top / 20 - 7);		
		}, 1200)
	})
}

module.exports = smoothScrolling;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function modal () {
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

}
module.exports = modal;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function popupAnimation (){
	let browser = detect.parse(navigator.userAgent),
		animationStartBtn = document.querySelector('.more'),
		popup = document.querySelector('.popup');
		
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		alert('Sorre, Вы зашли с мобилки и никакой анимации не будет...')
	} else {
		if(browser.browser.family == 'IE' && browser.browser.family == 'Edge'){
			animationStartBtn.onclick = function () {
				popup.style.cssText = '-webkit-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);-o-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);';
			}
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
			}
		}
	}	
}

module.exports = popupAnimation;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function classFoo(){
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
}

module.exports = classFoo;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function ajax () {
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

			// function postData(Data){
			// 	return new Promise(function(resolve,reject){
					let request = new XMLHttpRequest();

					request.open("POST", "../../../src/server.php");
					request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

					request.onreadystatechange = function(){
						if (request.readyState < 4){
							// resolve()
							statusMessage.innerHTML = message.loading
						} else if(request.readyState === 4){
							if(request.status == 200 && request.status < 300){
								// resolve()
								// Добавляем контент на страницу
								statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
								statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
								setInterval(function(){
									statusMessage.style.cssText = 'display:none';
								}, 1000);
							}
							else {
								// reject()
								statusMessage.innerHTML = message.failure
							}
						}
					};

					request.send(formData);
					clearInput();
			// 	})
			// }

			function clearInput(){
				for(let i = 0; i < input.length; i++){
					input[i].value = '';
					// Очищаем поля ввода
				}
			}

			// postData(formData)
			// 				.then(() => statusMessage.innerHTML = message.loading)
			// 				.then(() => {
			// 					statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
			// 					statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
			// 					setInterval(function(){
			// 						statusMessage.style.cssText = 'display:none';
			// 					}, 1000);
			// 				})
			// 				.catch(() => statusMessage.innerHTML = message.failure)
			// 				.then(clearInput)

		});	
	}


	
}

module.exports = ajax;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function slider  () {
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
		// slides[slideIndex - 1].classList.add('animated slideOutLeft');
		wrap.style.cssText = `overflow: hidden`;
	});
	next.addEventListener('click', function(){
		plusSlides(1);
		slides[slideIndex - 1].style.cssText = `
			animation: slide-from-left 2s; 
		`;
		// slides[slideIndex - 1].classList.add('animated slideOutRight');
		wrap.style.cssText = `overflow: hidden`;
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
}

module.exports = slider;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function calculator () {
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

 	let requestAnimationFrame =
 	        window.requestAnimationFrame ||       
 	        window.mozRequestAnimationFrame ||    
 	        window.webkitRequestAnimationFrame || //Вебкиты для браузеров
 	        window.msRequestAnimationFrame ||     
 	        function (f) { window.setTimeout(function () { f(Date.now()); }, 1000/60); };//Если что-то идет не так

 	let cancelAnimationFrame =
 	        window.cancelAnimationFrame ||
 	        window.mozCancelAnimationFrame ||
 	        window.webkitCancelAnimationFrame ||
 	        window.msCancelAnimationFrame;

 	// your code here

 	let progress = 0;
 	function doSomething() {
	    if (progress <= total) {
	    	let myAnimation = requestAnimationFrame(doSomething); 
	    	totalValue.innerHTML = progress;
	    	progress += total * 0.03;
	        
	    } else {
	        cancelAnimationFrame(requestAnimationFrame);
	        totalValue.innerHTML = total;
	    }        
	}
	



	persons.addEventListener('change', function(){
		personSum = +this.value;
		total = (daySum + personSum) * 4000;
		if(restDays.value == ''){
			totalValue.innerHTML = '0';
		} else {
			// totalValue.innerHTML = total;
			// animateNumber(total)
			doSomething();
		} 
	});
	restDays.addEventListener('change', function(){
		daySum = +this.value;
		total = (daySum + personSum) * 4000;
		if(persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			// totalValue.innerHTML = total;
			// animateNumber(total)
			doSomething();
		}
	});	

	place.addEventListener('change', function(){
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			let a = total;
			a = a * this.options[this.selectedIndex].value;
			// totalValue.innerHTML = a;
			// animateNumber(a)
			let foo = function doSomethingA() {
	    if (progress <= a) {
	    	let myAnimation = requestAnimationFrame(doSomethingA); 
	    	totalValue.innerHTML = progress;
	    	progress += a * 0.03;
	    } else {
	        cancelAnimationFrame(requestAnimationFrame);
	        totalValue.innerHTML = a;
	    }        
	}
			foo();
		}
	});
	if(restDays != '' && persons != ''){
			let nullCheck = setInterval(function (){
			if(restDays.value == '' || persons.value == ''){
				totalValue.innerHTML = '0';
			} 
		}, 100); 
	} else {
		clearInterval(nullCheck);
	}
}

module.exports = calculator;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function timer () {
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
}

module.exports = timer;

/***/ })
/******/ ]);