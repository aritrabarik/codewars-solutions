/* Problem Link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051

Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):

35231 => [1,3,2,5,3]

0 => [0] */

function digitize(n) {
    //code here
    let arr = [];
    if (n === 0) return [0];

    // Extract digits and push them into the array in reverse order
    while (n > 0) {
        let lastDigit = n % 10; // Extract the last digit
        arr.push(lastDigit);    // Push the last digit into the array
        n = Math.floor(n / 10); // Remove the last digit from the number
    }

    return arr;
}

/* Explanation:

1. Initialize an Empty Array:

- let digits = []; initializes an empty array to store the digits in reverse order.

2. Handle the Special Case for Zero:

- If n is 0, the function immediately returns [0].

3. Extract and Store Digits in Reverse Order:

- Use a while loop to continue processing as long as n is greater than 0.

- let lastDigit = n % 10; extracts the last digit of n.

- digits.push(lastDigit); appends the extracted digit to the digits array.

- n = Math.floor(n / 10); removes the last digit from n by dividing n by 10 and using Math.floor to round down to the nearest integer.

4. Return the Digits Array:

- After processing all the digits, the function returns the digits array.

Examples:

- digitize(35231):

The digits are extracted in the following order: 1, 3, 2, 5, 3.

The function returns [1, 3, 2, 5, 3].

digitize(0):

Since n is 0, the function immediately returns [0].

This implementation ensures that the digits of the given number are returned in an array in reverse order, handling both typical cases and the special case where the input number is zero. */
