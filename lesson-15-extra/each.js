
	var each = function(startArr, f){
		return f(startArr);
	}; 
	var arr1 = [64, 49, 36, 25, 16];
	var myFunc = function(a){
		var newArr = [];
		for (var i = 0; i < a.length; i++) {
			newArr[i]=Math.sqrt(a[i]);
		}
		return newArr;
	}
	
	console.log(typeof(each(arr1, myFunc)));


module.exports = each(arr1, myFunc);

