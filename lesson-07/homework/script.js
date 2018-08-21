

window.onload = function(){
    (function(){
        let time, 
        	hours, 
        	minutes, 
        	seconds;
        	date = document.getElementById('date');

        time = new Date();

        hours = time.getHours();
        minutes = time.getMinutes();
        seconds = time.getSeconds();



        function Zero () {
        	if(hours < 10){
        		hours += '0' 
        	}
        	if(minutes < 10){
        		minutes += '0' 
        	}
        	if(seconds < 10){
        		seconds += '0'
        	}
        }


        Zero();

        time = hours + ':' + minutes + ':' + seconds;
        document.getElementsByTagName('div')[0].innerHTML = time;
        window.setTimeout(arguments.callee, 1000);
    })();
};
