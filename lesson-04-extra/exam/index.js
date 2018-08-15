




function isInteger(num) {
  return (num ^ 0) === num;
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}

function getDivisorsSum (num) {
	return getSum(getDivisors(num));
}		

function getDivisors (num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}

	return arr;
}

function getSum (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function isFriendly (num1, num2) {
	let sum1 = getDivisorsSum(num1);
	let sum2 = getDivisorsSum(num2);

	return sum1 == num2 && sum2 == num1;
}

function getFriendlyNumbers(start, end) {
	let numbers = [];
	if(start <= end && typeof(start) == 'number' && typeof(end) == 'number' && start > 0 && end > 0 && isInteger(start) == true && isInteger(end) == true) {
		for (let i = start; i < end; ++i) {
			for (let y = i + 1; y <= end; y++){
				if (isFriendly(i,y) == true) {
					numbers.push([i,y]);		
				} else if(numbers == []) {
					return numbers;
				}
			}
		}
		return numbers;
	} else {
		return false;
	}	
}	
console.log(getFriendlyNumbers(284,500));
