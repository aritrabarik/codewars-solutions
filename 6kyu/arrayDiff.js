/* Problem Link: https://www.codewars.com/kata/523f5d21c841566fde000009

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] */

function arrayDiff(a, b) {
    let finalArr = [];
    for (let i = 0; i < a.length; i++) {
        let found = false;
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                found = true;
                break;
            }
        }
        if (!found) finalArr.push(a[i]);
    }
    return finalArr;
}

/* Explanation:

1. Function Definition:

- The function arrayDiff takes two parameters a and b, which are both arrays.

2. Initialize Result Array:

- An empty array result is initialized to store the elements that are not present in b.

3. Iterate through Array a:

- A for loop is used to iterate through each element of array a.

4. Check if Element is Not in Array b:

- For each element a[i], initialize a found flag to false.

- Use a nested for loop to iterate through array b to check if a[i] is present in b.

- If a[i] is found in b, set found to true and break out of the inner loop.

5. Add Element to Result Array if Not Found:

- If a[i] is not found in b (found is false), add it to the result array.

6. Return the Result Array:

- After the loop completes, the result array is returned, containing all the elements of a that are not present in b. */
