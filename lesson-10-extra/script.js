window.addEventListener("DOMContentLoaded", function() {
function setCursorPosition(pos, elem) {
    elem.focus(); //Нажатие на инпут 
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);// Проверяем на положение курсора
    else if (elem.createTextRange) { // Если не в начале, то возвращаем положение в начало маски
        let range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    let matrix = this.defaultValue, // Задает дефолтное значение
        i = 0,
        def = matrix.replace(/\D/g, ""), // Удаляет неверное значение
        val = this.value.replace(/\D/g, ""); // Удаляет неверное значение
        def.length >= val.length && (val = def); // Проверяет на количество символов
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix; // ???
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}

    let input = document.querySelector("input"); // Получает инпут
    input.addEventListener("input", mask, false) // Создает ивент
});

function check(event){
  let matrix = this.defaultValue;
  console.log(matrix);
}
check();