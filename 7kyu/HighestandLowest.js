/*  Problem Link: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript 

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples:

--> highAndLow("1 2 3 4 5");  // return "5 1"

--> highAndLow("1 2 -3 4 5"); // return "5 -3"

--> highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes

--> All numbers are valid Int32, no need to validate them.

--> There will always be at least one number in the input string.

--> Output string must be two numbers separated by a single space, and highest number is first. */

function highAndLow(numbers) {
    // Convert the string to an array of numbers
    const nums = numbers.split(" ").map(Number);

    // Find the highest and lowest numbers using Math.max() and Math.min()
    const highest = Math.max(...nums);
    const lowest = Math.min(...nums);

    // Return the highest and lowest numbers as a string
    return highest + " " + lowest;
}

/* Here's how the above function works:

--> The input string is first split using the split() method with a space character as the separator. This creates an array of strings representing the individual numbers.

--> The map() method is called on the resulting array, which converts each string to a number using the Number() function. The resulting array contains only numbers.

--> The Math.max() function is used to find the highest number in the array by passing the spread operator (...) along with the nums array as arguments. The spread operator unpacks the array so that each element is passed as an individual argument to the Math.max() function.

--> Similarly, the Math.min() function is used to find the lowest number in the array.

--> The highest and lowest numbers are returned in the string format mentioned.

For example, if you call the function with the input string "4 7 2 8 5", it will return the array [8, 2], which represents the highest and lowest numbers in the string respectively. */
