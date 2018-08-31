function smoothScrolling () {
	function animate (draw, duration) {
		let start = performance.now();

		requestAnimationFrame(function animate(time){
			let timePassed = time - start;
			if(timePassed > duration) timePassed = duration;
			draw(timePassed);
			if(timePassed < duration){
				requestAnimationFrame(animate); 
			} 
		})
	}

	let nav = document.querySelector('nav');

	nav.addEventListener('click', function  (event) {
		event.preventDefault();
		animate(function(timePassed){
			let target = event.target,
				section = document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0, section.getBoundingClientRect().top / 20 - 7);		
		}, 1200)
	})
}

module.exports = smoothScrolling;