/* Problem Link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d 

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples

[7, 1]  =>  [1, 7]

[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]

[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
    // Return a sorted array.
    // Step 1: Extract the odd numbers
    let oddNumbers = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) oddNumbers.push(array[i]);
    }

    // Step 2: Sort the odd numbers
    oddNumbers.sort((a, b) => a - b);

    let sortedArray = [];
    let oddIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sortedArray.push(oddNumbers[oddIndex]);
            oddIndex += 1;
        } else sortedArray.push(array[i]);
    }

    return sortedArray;
}

/* Explanation:

1. Extract the Odd Numbers:

- We iterate through the array and check each element to see if it is odd (arr[i] % 2 !== 0).

- If it is odd, we add it to the oddNumbers array.

2. Sort the Odd Numbers:

- We use the sort method with a custom comparator (a, b) => a - b to sort the odd numbers in ascending order.

3. Reconstruct the Array:

- We create a new array sortedArray and use an index oddIndex to track the position in the sorted oddNumbers array.

- We iterate through the original array again.

- For each odd number in the original array, we replace it with the next number from the sorted oddNumbers array.

- For each even number, we keep it in its original position. */
