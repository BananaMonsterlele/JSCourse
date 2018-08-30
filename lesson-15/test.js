// Р¤СѓРЅРєС†РёСЏ sum РґРѕР»Р¶РЅР° РІРѕР·РІСЂР°С‰Р°С‚СЊ С‚РёРї РґР°РЅРЅС‹С… true. РџСЂРѕРІРµСЂРёС‚СЊ РµС‘ РЅР° СЌС‚Рѕ.

function sum(a, b) {
	return a + b > 10;
}
sum(2,2)

let assert = require('chai').assert;

describe("test", function () {
	it("Сумма больше 10", function(){
		assert.isTrue(sum(2,2));
	});
});

// // РџРµСЂРµРјРµРЅРЅР°СЏ num РґРѕР»Р¶РЅР° Р±С‹С‚СЊ СЂР°РІРЅР° 5. РџСЂРѕРІРµСЂРёС‚СЊ РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ.

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

describe("test", function () {
	it("Переменная равна 5", function(){
		assert.equal(num, 5);
	});
});

// РЈР·РЅР°С‚СЊ, С‡С‚Рѕ РЅР°Рј РІРµСЂРЅРµС‚ С„СѓРЅРєС†РёСЏ each РІ РґР°РЅРЅС‹С… СѓСЃР»РѕРІРёСЏС…. РџСЂРѕРІРµСЂРёС‚СЊ РµС‘ РЅР° С‚РёРї РґР°РЅРЅС‹С…, РєРѕС‚РѕСЂС‹Р№ РѕРЅР° РІРѕР·РІСЂР°С‰Р°РµС‚,
// РЅР° СЃРѕРѕС‚РІРµС‚СЃС‚РІРёРµ РѕР¶РёРґР°РµРјРѕРјСѓ СЂРµР·СѓР»СЊС‚Р°С‚Сѓ (РєРѕС‚РѕСЂС‹Р№ РІС‹ РїРѕР»СѓС‡РёР»Рё) Рё РЅР° СЃРІРѕР№СЃС‚РІРѕ length.

var each = function(startArr, f){
	return f(startArr)
};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}
console.log(each(arr1, myFunc));

describe("test", function () {
	it("Тип данных вывода функции", function(){
		assert.typeOf(each(arr1, myFunc), 'array');
	});
	it("Результат функции", function(){
		assert.equal(each(arr1, myFunc), [8, 7, 6, 5, 4]);
	});
	it("Длина получившегося массива", function(){
		assert.lengthOf(each(arr1, myFunc), 5);
	});
});





