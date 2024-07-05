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
