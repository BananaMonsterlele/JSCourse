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

	let deadline = '2018-08-22';

	function getTimeRemaining (endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60 ),
			minutes = Math.floor( (t/100/60) % 60),
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

		let timeInterval = setInterval(updateClock, 1000);	

		function updateClock () {
			let t = getTimeRemaining(endTime);

			if(Number(t.hours) < 10){
				t.hours = '0' + t.hours;
			} else if(Number(t.minutes) < 10){
				t.minutes = '0' + t.minutes;
			} else if(Number(t.seconds) < 10){
				t.seconds = '0' + t.seconds;
			}

			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;

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

// Smooth scrolling

	(function() // Code in a function to create an isolate scope
{
let speed = 500;
let moving_frequency = 15; // Affects performance !
let links = document.getElementsByTagName('a');
let href;
for(let i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            let element;
            let href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                let hop_count = speed/moving_frequency
                let getScrollTopDocumentAtBegin = getScrollTopDocument();
                let gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(let i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        let hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0, hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
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

})()
// Modal showing for timer

	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'); 

	more.addEventListener('click', function  () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});	
	close.addEventListener('click', function  () {
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
	close.addEventListener('click', function  () {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	}	
})
