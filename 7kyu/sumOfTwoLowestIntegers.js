/* Problem Link: https://www.codewars.com/kata/558fc85d8fd1938afb000014

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455. */

function sumTwoSmallestNumbers(numbers) {
    //Code here
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] < secondSmallest) secondSmallest = numbers[i];
    }

    return smallest + secondSmallest;
}

/* Explanation:

1. Initialize Variables:

- Initialize smallest and secondSmallest to Infinity to ensure any number in the array will be smaller initially.

2. Find the Two Smallest Numbers:

- Iterate through each element in the array using a for loop.

- If the current element is smaller than smallest, update secondSmallest to be smallest, and then update smallest to be the current element.

- Otherwise, if the current element is smaller than secondSmallest and not equal to smallest, update secondSmallest to be the current element.

3. Return the Sum:

- After finding the two smallest numbers, return their sum.

Examples:

- sumTwoSmallestNumbers([19, 5, 42, 2, 77]) returns 7 because 2 and 5 are the two smallest numbers and their sum is 7.

- sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]) returns 3453455 because 10 and 3453445 are the two smallest numbers and their sum is 3453455.

This implementation efficiently finds the two smallest numbers in a single pass through the array and computes their sum. */
