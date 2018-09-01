function ajax () {
	let message = {},
		formArr = document.getElementsByClassName('main-form');
	message.loading = 'Загрузка...';
	message.success = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так...';


	for(let y = 0; y < formArr.length; y++){
		let	form = formArr[y],
			input = form.getElementsByTagName('input'),
			statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

		
		form.addEventListener('submit', function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			// AJAX

			let formData = new FormData(form);

			// function postData(Data){
			// 	return new Promise(function(resolve,reject){
					let request = new XMLHttpRequest();

					request.open("POST", "../../../src/server.php");
					request.setRequestHeader("Content-Type", "application/x-www-form-urlendcoded");

					request.onreadystatechange = () => {
						if (request.readyState < 4){
							// resolve()
							statusMessage.innerHTML = message.loading
						} else if(request.readyState === 4){
							if(request.status == 200 && request.status < 300){
								// resolve()
								// Добавляем контент на страницу
								statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
								statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
								setInterval(function(){
									statusMessage.style.cssText = 'display:none';
								}, 1000);
							}
							else {
								// reject()
								statusMessage.innerHTML = message.failure
							}
						}
					};

					request.send(formData);
					clearInput();
			// 	})
			// }

			function clearInput(){
				for(let i = 0; i < input.length; i++){
					input[i].value = '';
					// Очищаем поля ввода
				}
			}

			// postData(formData)
			// 				.then(() => statusMessage.innerHTML = message.loading)
			// 				.then(() => {
			// 					statusMessage.innerHTML = '<img src="img/success.png" alt="Success">';
			// 					statusMessage.style.cssText = 'text-align: center; margin-top: 15px';
			// 					setInterval(function(){
			// 						statusMessage.style.cssText = 'display:none';
			// 					}, 1000);
			// 				})
			// 				.catch(() => statusMessage.innerHTML = message.failure)
			// 				.then(clearInput)

		});	
	}


	
}

module.exports = ajax;