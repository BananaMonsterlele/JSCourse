let str = 'урок-3-был слишком легким';

console.log(str[0].toUpperCase() + str.slice(1)); //Первое задание

console.log(str.replace(/-/g, ' ')); //Второе задание

console.log(str.replace(/им/g, 'оо'))//Третье задание

let arr = [20, 33, 1, 'Человек', 2, 3];
console.log(Math.sqrt((arr[0]**3) + (arr[1]**3) + (arr[2]**3) + (arr[3]**3) + (arr[4]**3) + (arr[5]**3))); //Четвертое задание


function transform(arg) {
	let string = arg;
	if(typeof(string) === 'string') {
		string = string.trim()	
		if (string.length > 50) {
			string = string.slice(0, 45) + '...';
			console.log('Больше 50 символов');
			}	
	} else {
		alert('Переменная имеет не строковое значение');
	}
	console.log(string);
}
transform(' Hello '); //Пятое задание


