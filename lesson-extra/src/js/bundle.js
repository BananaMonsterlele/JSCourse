

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//dsaddasdasdasda
window.addEventListener('DOMContentLoaded', function () {

	// Tabs	

	var tab = document.getElementsByClassName('info-header-tab'),
	    tabContent = document.getElementsByClassName('info-tabcontent'),
	    info = document.getElementsByClassName('info-header')[0];
	function hideTabContent(a) {
		for (var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function (event) {
		var target = event.target;
		if (target.className == 'info-header-tab') {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});

	// Timer

	var deadline = '2018-10-31';

	function getTimeRemaining(endTime) {
		var t = Date.parse(endTime) - Date.parse(new Date()),
		    seconds = Math.floor(t / 1000 % 60),
		    minutes = Math.floor(t / 1000 / 60 % 60),
		    hours = Math.floor(t / (1000 * 60 * 60));

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endTime) {

		var timer = document.getElementById(id),
		    hours = timer.querySelector('.hours'),
		    minutes = timer.querySelector('.minutes'),
		    seconds = timer.querySelector('.seconds');

		function updateClock() {
			var t = getTimeRemaining(endTime);

			hours.innerHTML = t.hours;
			if (hours.innerHTML < 10) {
				hours.innerHTML = '0' + hours.innerHTML;
			}

			minutes.innerHTML = t.minutes;
			if (minutes.innerHTML < 10) {
				minutes.innerHTML = '0' + minutes.innerHTML;
			}

			seconds.innerHTML = t.seconds;
			if (seconds.innerHTML < 10) {
				seconds.innerHTML = '0' + seconds.innerHTML;
			}
			var timeInterval = setInterval(updateClock, 1000);
			if (t.total <= 0) {
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

	function animate(draw, duration) {
		var start = performance.now();

		requestAnimationFrame(function animate(time) {
			var timePassed = time - start;
			if (timePassed > duration) timePassed = duration;
			draw(timePassed);
			if (timePassed < duration) {
				requestAnimationFrame(animate);
			}
		});
	}

	var nav = document.querySelector('nav');

	nav.addEventListener('click', function (event) {
		event.preventDefault();
		animate(function (timePassed) {
			var target = event.target,
			    section = document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0, section.getBoundingClientRect().top / 20 - 7);
		}, 1200);
	});

	// Modal showing for timer

	var more = document.querySelector('.more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close');

	more.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	// Modal showing for tabs

	var length = document.querySelectorAll('.description-btn').length;

	var _loop = function _loop(i) {
		var more = document.querySelectorAll('.description-btn')[i],
		    overlay = document.querySelector('.overlay'),
		    close = document.querySelector('.popup-close');

		more.addEventListener('click', function () {
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
		close.addEventListener('click', function () {
			overlay.style.display = 'none';
			more.classList.remove('more-splash');
			document.body.style.overflow = '';
		});
	};

	for (var i = 0; i < length; i++) {
		_loop(i);
	}

	// Popup animation
	var browser = detect.parse(navigator.userAgent),
	    animationStartBtn = document.querySelector('.more'),
	    popup = document.querySelector('.popup');

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		alert('Sorre, Вы зашли с мобилки и никакой анимации не будет...');
	} else {
		if (browser.browser.family == 'IE' && browser.browser.family == 'Edge') {
			animationStartBtn.onclick = function () {
				popup.style.cssText = '-webkit-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);-o-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);';
			};
		} else {
			animationStartBtn.onclick = function () {
				var marginLeft = -200,
				    marginTop = -200,
				    animation = setInterval(appear, 10);
				function appear() {
					if (marginLeft == 0) {
						clearInterval(animation);
					} else {
						marginLeft = marginLeft + 1;
						marginTop = marginTop + 1;
						popup.style.cssText = 'margin-left: ' + marginLeft + 'px; margin-top: ' + marginTop + 'px';
					}
				}
			};
		}
	}

	// Class

	var options = function () {
		function options(height, width, bg, fontSize, textAlign) {
			_classCallCheck(this, options);

			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}

		_createClass(options, [{
			key: 'newBlock',
			value: function newBlock() {
				var div = document.createElement('div');
				div.innerHTML = 'This text shouldnt be good and it is';
				div.style.cssText = '\n\t\t\t\theight: ' + this.height + 'px;\n\t\t\t\twidth: ' + this.width + 'px;\n\t\t\t\tbackground: ' + this.bg + ';\n\t\t\t\tfont-size: ' + this.fontSize + 'px;\n\t\t\t\ttext-align: ' + this.textAlign + ';\n\t\t\t';
				document.body.appendChild(div);
			}
		}]);

		return options;
	}();

	var Div = new options(100, 1000, '#fff', 32, 'center');

	Div.newBlock();

	// Form modal

	var message = {},
	    formArr = document.getElementsByClassName('main-form');
	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';

	var _loop2 = function _loop2(y) {
		var form = formArr[y],
		    input = form.getElementsByTagName('input'),
		    statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

		form.addEventListener('submit', function (event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX

			var formData = new FormData(form);

			function postData(Data) {
				return new Promise(function (resolve, reject) {
					var request = new XMLHttpRequest();

					request.open("POST", "../server.php");
					request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

					request.onreadystatechange = function () {
						if (request.readyState < 4) {
							resolve();
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								resolve();
								// Добавляем контент на страницу
							} else {
								reject();
							}
						}
					};

					request.send(Data);
				});
			}

			function clearInput() {
				for (var i = 0; i < input.length; i++) {
					input[i].value = '';
					// Очищаем поля ввода
				}
			}

			postData(formData).then(function () {
				return statusMessage.innerHTML = message.loading;
			}).then(function () {
				statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
				statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
				setInterval(function () {
					statusMessage.style.cssText = 'display:none';
				}, 1000);
			}).catch(function () {
				return statusMessage.innerHTML = message.failure;
			}).then(clearInput);
		});
	};

	for (var y = 0; y < formArr.length; y++) {
		_loop2(y);
	}

	// Slider

	var slideIndex = 1,
	    slides = document.getElementsByClassName('slider-item'),
	    prev = document.querySelector('.prev'),
	    next = document.querySelector('.next'),
	    dotsWrap = document.querySelector('.slider-dots'),
	    dots = document.getElementsByClassName('dot'),
	    wrap = document.querySelector('.wrap');

	showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		for (var _i = 0; _i < dots.length; _i++) {
			dots[_i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
		slides[slideIndex - 1].style.cssText = '\n\t\t\tanimation: slide-from-right 2s; \n\t\t';
		// slides[slideIndex - 1].classList.add('animated slideOutLeft');
		wrap.style.cssText = 'overflow: hidden';
	});
	next.addEventListener('click', function () {
		plusSlides(1);
		slides[slideIndex - 1].style.cssText = '\n\t\t\tanimation: slide-from-left 2s; \n\t\t';
		// slides[slideIndex - 1].classList.add('animated slideOutRight');
		wrap.style.cssText = 'overflow: hidden';
	});

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	dotsWrap, addEventListener('click', function (event) {
		for (var i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});

	// Calculator

	var persons = document.getElementsByClassName('counter-block-input')[0],
	    restDays = document.getElementsByClassName('counter-block-input')[1],
	    place = document.getElementById('select'),
	    totalValue = document.getElementById('total'),
	    personSum = 0,
	    daySum = 0,
	    total = 0;

	totalValue.innerHTML = '0';

	persons.onkeyup = function () {
		this.value = this.value.replace(/\D/g, "");
	};
	restDays.onkeyup = function () {
		this.value = this.value.replace(/\D/g, "");
	};
	function scroll(val, el, timeout, step) {
		var i = 0;
		(function () {
			if (i <= val) {
				setTimeout(arguments.callee, timeout);
				document.getElementById(el).innerHTML = i;
				i = i + step;
			} else {
				document.getElementById(el).innerHTML = val;
			}
		})();
	}

	persons.addEventListener('change', function () {
		personSum = +this.value;
		total = (daySum + personSum) * 4000;
		if (restDays.value == '') {
			totalValue.innerHTML = '0';
		} else {
			scroll(total, 'total', 5, 150);
		}
	});
	restDays.addEventListener('change', function () {
		daySum = +this.value;
		total = (daySum + personSum) * 4000;
		if (persons.value == '') {
			totalValue.innerHTML = '0';
		} else {
			scroll(total, 'total', 5, 150);
		}
	});

	place.addEventListener('change', function () {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = '0';
		} else {
			var a = total;
			a = a * this.options[this.selectedIndex].value;
			scroll(a, 'total', 5, 150);
		}
	});
	if (restDays != '' && persons != '') {
		var _nullCheck = setInterval(function () {
			if (restDays.value == '' || persons.value == '') {
				totalValue.innerHTML = '0';
			}
		}, 100);
	} else {
		clearInterval(nullCheck);
	}
});
