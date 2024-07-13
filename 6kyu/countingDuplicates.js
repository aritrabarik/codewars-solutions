/* Problem Link: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1 

Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0 # no characters repeats more than once

"aabbcde" -> 2 # 'a' and 'b'

"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)

"indivisibility" -> 1 # 'i' occurs six times

"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice

"aA11" -> 2 # 'a' and '1'

"ABBA" -> 2 # 'A' and 'B' each occur twice */

function duplicateCount(text) {
    // Convert the string to lowercase to handle case insensitivity
    text = text.toLowerCase();

    // Create an object to count the frequency of each character
    let charCount = {};

    // Count the frequency of each character in the string
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (charCount[char]) charCount[char]++;
        else charCount[char] = 1;
    }

    // Count how many characters have a frequency greater than 1
    let duplicateCount = 0;
    for (let char in charCount) {
        if (charCount[char] > 1) duplicateCount++;
    }

    return duplicateCount;
}

/* Explanation:

1. Convert to Lowercase: 

- This ensures that the counting is case-insensitive by converting all characters to lowercase.

2. Count Frequencies:

- Iterate through the string and use an object charCount to keep track of how many times each character appears.

3. Identify Duplicates:

- Iterate through the charCount object and count how many characters have a frequency greater than one. */
