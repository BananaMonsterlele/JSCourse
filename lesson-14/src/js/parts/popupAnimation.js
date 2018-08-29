function popupAnimation (){
	let browser = detect.parse(navigator.userAgent),
		animationStartBtn = document.querySelector('.more'),
		popup = document.querySelector('.popup');
		
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		alert('Sorre, Вы зашли с мобилки и никакой анимации не будет...')
	} else {
		if(browser.browser.family == 'IE' && browser.browser.family == 'Edge'){
			animationStartBtn.onclick = function () {
				popup.style.cssText = '-webkit-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);-o-animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);animation: slide_down 2s cubic-bezier(.51,-0.24,.89,1.83);';
			}
		} else {
			animationStartBtn.onclick = function(){
				let marginLeft = -200,
					marginTop = -200,
					animation = setInterval(appear, 10);
				function appear(){
					if(marginLeft == 0){
						clearInterval(animation);
					} else {
						marginLeft = marginLeft + 1;
						marginTop = marginTop + 1;
						popup.style.cssText = `margin-left: ${marginLeft}px; margin-top: ${marginTop}px`;
					}
				}
			}
		}
	}	
}

module.exports = popupAnimation;