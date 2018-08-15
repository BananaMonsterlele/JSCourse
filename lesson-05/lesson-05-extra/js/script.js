/*let time, 
	hours, 
	miutes, 
	seconds,
	days,
	months,
	years;

time = new Date();

hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();
days = time.getDate();
months = time.getMonth() + 1;
years = time.getFullYear();



function Zero () {
	if(days < 10){
		days = '0' + days;
	}
	if(months < 10){
		months = '0' + months;
	}

}

WeekDay();

Zero();

time = hours + ':' + minutes + ':' + seconds + ' ' + days + '.' + months + '.' + years;

alert(time);


function WeekDay(){
    switch (time.getDay()){
        case 0: 
        	alert('Воскресенье');
        	break;
        case 1: 
        	alert('Понедельник');
        	break;
        case 2: 
        	alert('Вторник');
			break;
        case 3: 
        	alert('Среда');
        	break;
        case 4: 
        	alert('Четверг');
        	break;
        case 5: 
        	alert('Пятница');
        	break;
        case 6: 
        	alert('Суббота');
        	break;
        default: 
        	alert('Are you durak?');
        	break;
    }
}
*/

let input1 = document.getElementById('input1'),
	input2 = document.getElementById('input2'),
	input3 = document.getElementById('input3'),
	btn1 = document.getElementById('btn1'),
	btn2 = document.getElementById('btn2'),
	date1,
	date2;




function Lag(){
	date1 = new Date(input1.value);
	date2 = new Date(input2.value);
	let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
	input3.value = daysLag;
}





