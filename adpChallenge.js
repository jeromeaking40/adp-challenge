//Create a function that takes an array of numbers and returns an array of only the odd numbers.
// The function must not use looping or libraries that use looping.

// Array of numbers
// Each number needs to be tested against the isOddNumber function
let numbers = [
	2,
	3,
	4,
	5,
	6,
	17,
	28,
	39,
	41,
	52,
	54,
	75,
	83,
	109,
	58,
	77,
	93,
	133,
	230,
	305
];

// Push all odd numbers into this array;
let oddNumbers = [];

// Check to see if a number is odd
function isOddNumber(a, b) {
	if (a % 2 & b % 2) {
		oddNumbers.push(a);
		return oddNumbers;
	}
}

// Return array of only odd numbers in this function.
function getOddNumbers(nums = []) {
	// Is sorting an array considered looping? I don't think so. Might be wrong?!?!?!
	nums.sort(isOddNumber);
	console.log(oddNumbers);
}

// Call the function
getOddNumbers(numbers);
