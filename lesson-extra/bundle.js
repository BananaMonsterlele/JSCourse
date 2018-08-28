'use strict';

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

	(function () {
		// Code in a function to create an isolate scope

		var speed = 500,
		    moving_frequency = 15,
		    links = document.querySelectorAll('li a'),
		    href = void 0;

		for (var i = 0; i < links.length; i++) {
			href = links[i].attributes.href === undefined ? null : links[i].attributes.href.nodeValue.toString();
			if (href !== null && href.length > 1 && href.substr(0, 1) == '#') {
				links[i].onclick = function () {
					var element = void 0;
					var href = this.attributes.href.nodeValue.toString();
					element = document.getElementById(href.substr(1));
					var hop_count = speed / moving_frequency;
					var getScrollTopDocumentAtBegin = getScrollTopDocument();
					var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

					var _loop = function _loop(_i) {
						(function () {
							var hop_top_position = gap * _i;
							setTimeout(function () {
								window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin);
							}, moving_frequency * _i);
						})();
					};

					for (var _i = 1; _i <= hop_count; _i++) {
						_loop(_i);
					}

					return false;
				};
			}
		}

		var getScrollTopElement = function getScrollTopElement(e) {
			var top = 0;

			while (e.offsetParent != undefined && e.offsetParent != null) {
				top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
				e = e.offsetParent;
			}

			return top;
		};

		var getScrollTopDocument = function getScrollTopDocument() {
			return document.documentElement.scrollTop + document.body.scrollTop;
		};
	})();

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

	var _loop2 = function _loop2(i) {
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
		_loop2(i);
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

	var _loop3 = function _loop3(y) {
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
		_loop3(y);
	}
});
