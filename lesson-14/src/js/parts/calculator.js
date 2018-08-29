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
	function scroll(val,el,timeout,step){
	var i=0;
	(function(){
	if(i<=val){
	setTimeout(arguments.callee,timeout);
	document.getElementById(el).innerHTML=i;
	i=i+step;
	}else{
	document.getElementById(el).innerHTML=val;
	}
	})();
	}
	 
	
	
	persons.addEventListener('change', function(){
		personSum = +this.value;
		total = (daySum + personSum) * 4000;
		if(restDays.value == ''){
			totalValue.innerHTML = '0';
		} else {
			scroll(total,'total',5,150);
		} 
	});
	restDays.addEventListener('change', function(){
		daySum = +this.value;
		total = (daySum + personSum) * 4000;
		if(persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			scroll(total,'total',5,150);
		}
	});	

	place.addEventListener('change', function(){
		if(restDays.value == '' || persons.value == ''){
			totalValue.innerHTML = '0';
		} else {
			let a = total;
			a = a * this.options[this.selectedIndex].value;
			scroll(a,'total',5,150);
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