/* Problem Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

""  -->  "" */

function order(words) {
    // ...
    if (words === 0) return "";

    // Split the input string into words using split method
    let wordArray = words.split(" ");

    // Function to extract the number from a word
    function extractNumber(word) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] >= "0" && word[i] <= "9") return parseInt(word[i], 10);
        }
        return -1;
    }

    // Sort the words based on the number within each word
    for (let i = 0; i < wordArray.length - 1; i++) {
        for (let j = 0; j < wordArray.length - 1 - i; j++) {
            if (extractNumber(wordArray[j]) > extractNumber(wordArray[j + 1])) {
                // Swap the words
                let temp = wordArray[j];
                wordArray[j] = wordArray[j + 1];
                wordArray[j + 1] = temp;
            }
        }
    }

    // Join the sorted words back into a single string
    return wordArray.join(" ");
}

/* Explanation:

1. Check for Empty String:

- If the input string words is empty, return an empty string immediately.

2. Split the Input String:

- let wordArray = words.split(" "); splits the input string into an array of words using the split method with a space as the delimiter.

3. Extract the Number from Each Word:

extractNumber Function

This function is designed to extract the first numeric character from a given word and return it as an integer.

a. Function Definition:

function extractNumber(word) {

- The function extractNumber takes a single parameter word, which is a string representing a word that contains a numeric character indicating its position.

b. Loop Through Each Character:

for (let i = 0; i < word.length; i++) {

- This for loop iterates over each character in the word string.

- let i = 0 initializes the loop counter i to 0.

- i < word.length ensures the loop runs as long as i is less than the length of the word.

- i++ increments the loop counter by 1 in each iteration.

c. Check if Character is a Number:

if (word[i] >= '0' && word[i] <= '9') {

- Inside the loop, this if statement checks if the current character word[i] is a digit.

- word[i] >= '0' checks if the character is greater than or equal to '0'.

- word[i] <= '9' checks if the character is less than or equal to '9'.

- If both conditions are true, word[i] is a numeric character (between '0' and '9').

d. Convert Character to Integer and Return:

return parseInt(word[i], 10);

- If the character is a numeric character, parseInt(word[i], 10) converts it from a string to an integer.

- parseInt is a function that converts a string to an integer, and the second argument 10 specifies that the string should be parsed as a base 10 number.

- The function then returns this integer value.

e. Return -1 if No Number is Found:

return -1; // Return -1 if no number is found (which shouldn't happen here)

- If the loop completes and no numeric character is found in the word, the function returns -1.

- This scenario shouldn't occur because the problem guarantees that each word contains exactly one numeric character.

4. Sort the Words Manually:

a. Outer Loop (i):

for (let i = 0; i < wordArray.length - 1; i++) {

- This loop runs from 0 to wordArray.length - 1.

- It represents the number of passes through the array.

- Each pass ensures that the largest unsorted element "bubbles up" to its correct position.

b. Inner Loop (j):

for (let j = 0; j < wordArray.length - 1 - i; j++) {

- This loop runs from 0 to wordArray.length - 1 - i.

- In each pass, the inner loop compares adjacent elements and swaps them if they are in the wrong order.

- The '- i' part optimizes the algorithm by not checking the last i elements, which are already sorted after each pass.

c. Comparison and Swap:

- Comparison: The extractNumber function is used to extract the number from the current word (wordArray[j]) and the next word (wordArray[j + 1]).

    - extractNumber(wordArray[j]) > extractNumber(wordArray[j + 1]) checks if the number in the current word is greater than the number in the next word.

- Swap: If the current word's number is greater, the words are swapped to place them in the correct order.

* let temp = wordArray[j]; temporarily stores the current word.

* wordArray[j] = wordArray[j + 1]; replaces the current word with the next word.

* wordArray[j + 1] = temp; sets the next word to the temporarily stored current word.

Example Walkthrough:

Suppose wordArray is ["is2", "Thi1s", "T4est", "3a"].

- First Pass (i = 0):

- j = 0: Compare extractNumber("is2") (2) and extractNumber("Thi1s") (1). Swap because 2 > 1.

* Result: ["Thi1s", "is2", "T4est", "3a"]

- j = 1: Compare extractNumber("is2") (2) and extractNumber("T4est") (4). No swap because 2 < 4.

- j = 2: Compare extractNumber("T4est") (4) and extractNumber("3a") (3). Swap because 4 > 3.

* Result: ["Thi1s", "is2", "3a", "T4est"]

- Second Pass (i = 1):

- j = 0: Compare extractNumber("Thi1s") (1) and extractNumber("is2") (2). No swap because 1 < 2.

- j = 1: Compare extractNumber("is2") (2) and extractNumber("3a") (3). No swap because 2 < 3.

- Third Pass (i = 2):

- j = 0: Compare extractNumber("Thi1s") (1) and extractNumber("is2") (2). No swap because 1 < 2.

At this point, the array is fully sorted: ["Thi1s", "is2", "3a", "T4est"].

Summary:

The sorting part of the code uses a nested loop to perform a bubble sort. It compares adjacent words based on the numeric values extracted from them and swaps them if necessary to sort the array. The outer loop controls the number of passes, and the inner loop performs the comparisons and swaps within each pass.

5. Manually Join the Sorted Words:

- Iterate over the sorted words and build the result string by concatenating words with spaces in between. */
