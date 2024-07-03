/* Problem Link:

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example:

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] 

You should return [10, -65].  */

function countPositivesSumNegatives(input) {
    // your code here
    let pcount = 0;
    let nsum = 0;

    if (input === null || input.length === 0) return [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) pcount += 1;
        else if (input[i] < 0) nsum += input[i];
    }

    return [pcount, nsum];
}

/* Explanation:

1. Check for null or empty input:

- If the input array is null or has a length of 0, return an empty array.

2. Initialize counters:

- countPositives is initialized to 0 to count the positive numbers.
- sumNegatives is initialized to 0 to accumulate the sum of negative numbers.

3. Loop through the array:

- Iterate through each element in the input array.

-If the element is positive (input[i] > 0), increment countPositives.

-If the element is negative (input[i] < 0), add it to sumNegatives.

4. Return the result:

- Return an array with countPositives as the first element and sumNegatives as the second element.

Examples:

- countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
  returns [10, -65].

- countPositivesSumNegatives([]) returns [].

- countPositivesSumNegatives(null) returns [].

This function efficiently processes the input array and handles edge cases where the input might be null or empty. */
