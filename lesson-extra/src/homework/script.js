let input = document.getElementById('age');

function User(name, surname) {
	this.name = name,
	this.surname = surname
	this.show = function showUser(surname, name) {
         alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + input.value);
	}
}
 
let Ivan = new User('Ivan', 'Smith');

Ivan.show();