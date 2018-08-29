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