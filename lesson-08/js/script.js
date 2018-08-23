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
	})	

// Timer

	let deadline = '2018-08-24';

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
				hours.innerHTML = '0' + hours.innerHTML;
			}
			
			minutes.innerHTML = t.minutes;
			if(minutes.innerHTML < 10){
				minutes.innerHTML = '0' + minutes.innerHTML;
			}

			seconds.innerHTML = t.seconds;
			if(seconds.innerHTML < 10){
				seconds.innerHTML = '0' + seconds.innerHTML;
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

		

	};

	setClock('timer', deadline);

	// smooth scrolling

	// let contacts = document.getElementsByClassName('contacts');


	// for(let i = 0; i < contacts.length; i++){

	// 	let href = contacts[i].getAttribute('href');

	// 	contacts[i].addEventListener('click', () => {
	// 		function scrollTo(element, to, duration) {
	// 		    if (duration <= 0) return;
	// 		    var difference = to - element.scrollTop;
	// 		    var perTick = difference / duration * 10;

	// 		    setTimeout(function() {
	// 		        element.scrollTop = element.scrollTop + perTick;
	// 		        if (element.scrollTop === to) return;
	// 		        scrollTo(element, to, duration - 10);
	// 		    }, 10);
	// 		}
	// 		scrollTo(contacts[i], href, 10000)
	// 	})
	// }
	// собираем все якоря; устанавливаем время анимации и количество кадров
	const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
	      animationTime = 1000,
	      framesCount = 40;

	anchors.forEach(function(item) {
	  // каждому якорю присваиваем обработчик события
	  item.addEventListener('click', function(e) {
	    // убираем стандартное поведение
	    e.preventDefault();
	    
	    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
	    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
	    
	    // запускаем интервал, в котором
	    let scroller = setInterval(function() {
	      // считаем на сколько скроллить за 1 такт
	      let scrollBy = coordY / framesCount;
	      
	      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
	      // и дно страницы не достигнуто
	      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
	        // то скроллим на к-во пикселей, которое соответствует одному такту
	        window.scrollBy(0, scrollBy);
	      } else {
	        // иначе добираемся до элемента и выходим из интервала
	        window.scrollTo(0, coordY);
	        clearInterval(scroller);
	      }
	    // время интервала равняется частному от времени анимации и к-ва кадров
	    }, animationTime / framesCount);
	  });
	});
})