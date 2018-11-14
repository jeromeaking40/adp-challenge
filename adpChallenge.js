//Create a function that takes an array of numbers and returns an array of only the odd numbers.
// The function must not use looping or libraries that use looping.

// Array of numbers
let numbers = [2, 3, 4, 5, 6, 17, 28, 39, 41, 52, 54, 75, 83, 109, 58, 77, 93];

// Find out if a number is odd
function isOddNumber(number) {
	if (number % 2) {
		console.log('Number is odd:', number);
		return number;
	} else {
		console.log('Number is even:', number);
		return number;
	}
}

// Push all odd numbers into new array
function getOddNumbers() {
	let oddNumbers = numbers.filter(isOddNumber); //Is array.filter considered an loop?
	console.log(oddNumbers);
}

// Call the function
getOddNumbers(numbers);
