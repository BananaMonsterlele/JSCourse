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