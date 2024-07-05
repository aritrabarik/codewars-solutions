/* Problem Link: 

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2

findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

function findUniq(arr) {
    // do magic
    // Create an object to store the frequency of each element
    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (frequency[num] === undefined) frequency[num] = 1;
        else frequency[num]++;
    }

    // Iterate through the frequency object to find the unique element
    for (let key in frequency) {
        if (frequency[key] === 1) return parseFloat(key); // Convert key back to number before returning
    }
}

/* Explanation: 

1. Initialize Frequency Object:

- Create an empty object frequency to store the count of each element in the array.

2. Populate the Frequency Object:

- Loop through the array arr.

- For each element, check if it already exists in the frequency object.

- If it does not exist, add it to the object with a count of 1.

- If it does exist, increment its count by 1.

3. Find the Unique Element:

- Loop through the keys of the frequency object.

- Check if the count of any key is 1.

- Return the key (converted back to a number) that has a count of 1.

This approach ensures that we only need two passes through the data: one to build the frequency map and another to find the unique element. This is efficient and works well for large arrays. */
