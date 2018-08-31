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
	function animateNumber(total) {
           let number = 0;

        setInterval(function() {
            number+=200;

               if (number <= total) {
                totalValue.innerHTML = number;
               }
        }, 1);
    };
 //    function animate (draw, duration) {
	// 	let start = performance.now();

	// 	requestAnimationFrame(function animate(time){
	// 		let timePassed = time - start;
	// 		if(timePassed > duration) timePassed = duration;
	// 		draw(timePassed);
	// 		if(timePassed < duration){
	// 			requestAnimationFrame(animate); 
	// 		} 
	// 	})
	// }

	persons.addEventListener('change', function(){
		personSum = +this.value;
		total = (daySum + personSum) * 4000;
		if(restDays.value == ''){
			totalValue.innerHTML = '0';
		} else {
			animateNumber(total)
			// animate(function(timePassed){
			// 	// let number = 0;
			// 	// if (number <= total) {
			// 	// number += timePassed;
			// 	// timePassed += total;
			// 	// totalValue.innerHTML = Math.round(timePassed);
			// 	// number+=200;
			// 	// }
			// 	for(let i = 20; i <= total; i++){
			// 		let n = 0;
			// 		n = i;
			// 		totalValue.innerHTML = Math.round(timePassed);	
			// 	}	
			// }, 500);
		} 
	});
	restDays.addEventListener('change', function(){
		daySum = +this.value;
		total = (daySum + personSum) * 4000;
		if(persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			animateNumber(total)
			// animate(function(timePassed){
			// 	// let number = 0;
			// 	// if (number <= total) {
			// 	// number += timePassed;
			// 	// timePassed += total;
			// 	// totalValue.innerHTML = Math.round(timePassed);
			// 	// number+=200;
			// 	// }
			// 	for(let i = 20; i <= total; i++){
			// 		let n = 0;
			// 		n = i;
			// 		totalValue.innerHTML = Math.round(timePassed);	
			// 	}	
			// }, 500);
		}
	});	

	place.addEventListener('change', function(){
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			let a = total;
			a = a * this.options[this.selectedIndex].value;
			// animate(function(timePassed){
			// 	let number = 0;
			// 	console.log(number);
			// 	if (number <= a) {
			// 	console.log(number);
			// 	 totalValue.innerHTML = number;
			// 	 console.log(totalValue.value);
			// 	 number+=200;
			// 	 totalValue.innerHTML = timePassed * 22;
			// 	 console.log(number);
			// 	 console.log(timePassed);
			// 	}	
			// }, 1);
			animateNumber(a)
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