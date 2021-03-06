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
})