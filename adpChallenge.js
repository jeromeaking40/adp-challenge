//Create a function that takes an array of numbers and returns an array of only the odd numbers.
// The function must not use looping or libraries that use looping.

// Array of numbers
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

// Define a new array that will hold the odd numbers..
let oddNumbers = [];

// Create a recursive function that will return the odd numbers. No looping! :)
function getOddNumbers(nums, counter) {
	if (counter == nums.length) {
		return;
	}
	// Check to see if the number is odd, if so push it into a new array
	if (nums[counter] % 2) {
		oddNumbers.push(nums[counter]);
		console.log(oddNumbers);
	}
	getOddNumbers(nums, counter + 1);
}

getOddNumbers(numbers, 0);
