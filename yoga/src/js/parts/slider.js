function slider  () {
	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot'),
		wrap = document.querySelector('.wrap');

	showSlides(slideIndex);

	function showSlides(n){

		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1) {
			slideIndex = slides.length;
		}

		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = 'none';
		}

		for(let i = 0; i < dots.length; i++){
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}	

	function plusSlides (n) {
		showSlides(slideIndex += n);
	}

	prev.addEventListener('click', () => {
		plusSlides(-1);
		slides[slideIndex - 1].style.cssText = `
			animation: slide-from-right 2s; 
		`;
		// slides[slideIndex - 1].classList.add('animated slideOutLeft');
		wrap.style.cssText = `overflow: hidden`;
	});
	next.addEventListener('click', () => {
		plusSlides(1);
		slides[slideIndex - 1].style.cssText = `
			animation: slide-from-left 2s; 
		`;
		// slides[slideIndex - 1].classList.add('animated slideOutRight');
		wrap.style.cssText = `overflow: hidden`;
	});

	function currentSlide (n) {
		showSlides(slideIndex = n);
	}

	dotsWrap,addEventListener('click', (event) => {
		for(let i = 0; i < dots.length + 1; i++){
			if(event.target.classList.contains('dot') && event.target == dots[i-1]){
				currentSlide(i);
			} 
		}
	});
}

module.exports = slider;