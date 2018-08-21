let time, 
	hours, 
	minutes, 
	seconds,
	days,
	months,
	years,
	date = document.getElementById('date');

time = new Date();

hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();



function Zero () {
	if(days < 10){
		days = '0' + days;
	}
	if(months < 10){
		months = '0' + months;
	}

}


Zero();

time = hours + ':' + minutes + ':' + seconds;

alert(time);

date.textContent = time;


