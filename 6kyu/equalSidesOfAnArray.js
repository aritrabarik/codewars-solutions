/* Problem Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.

You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:

You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most languages the index of an array starts at 0.

Input: 

An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output: 

The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note: If you are given an array with multiple answers, return the lowest correct index. */

function findEvenIndex(arr) {
    //Code goes here!
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = sum - leftSum - arr[i];

        if (rightSum === leftSum) return i;

        leftSum += arr[i];
    }

    return -1;
}

/* Explanation:

1. Calculate the Total Sum:

- Use a for loop to iterate through the array and calculate the total sum of the array elements.

- Initialize totalSum to 0 and add each element of the array to totalSum.

2. Initialize leftSum:

- Initialize leftSum to 0 to keep track of the sum of elements to the left of the current index.

3. Iterate Through the Array:

- Use another for loop to iterate through the array.

- For each index i, calculate the rightSum as totalSum - leftSum - arr[i].

- Compare leftSum with rightSum. If they are equal, return the current index i.

- Update leftSum by adding the value of the current element arr[i] to it.

4. Return -1 if No Index Found:

- If no index is found where the left sum equals the right sum, return -1.

Examples:

- findEvenIndex([1, 2, 3, 4, 3, 2, 1]) returns 3 because the sums of elements to the left and right of index 3 are both 6.

- findEvenIndex([1, 100, 50, -51, 1, 1]) returns 1 because the sums of elements to the left and right of index 1 are both 1.

- findEvenIndex([20, 10, -80, 10, 10, 15, 35]) returns 0 because the sums of elements to the left and right of index 0 are both 0.

This implementation avoids using built-in functions by manually iterating through the array to calculate the total sum and left sum, ensuring it finds the correct index where the sums of elements on either side are equal. */
