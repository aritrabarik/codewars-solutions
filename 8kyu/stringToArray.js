/* Problem Link:  https://www.codewars.com/kata/57e76bc428d6fbc2d500036d

Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"] */

function stringToArray(string) {
    // Split the string by spaces to convert it into an array of words
    // return string.split(" ")

    let word = "";
    let arrWords = [];

    // Append a space to the end of the string to handle the last word
    string += " ";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            if (word.length > 0) {
                arrWords.push(word);
                word = "";
            }
        } else word += string[i];
    }

    return arrWords;
}

/* Explanation:

1. Append a Space: 

string += ' ';

- A space is appended to the end of the input string to ensure the last word is processed correctly.

2. Initialize Variables:

- result is an empty array that will store the words.

- word is an empty string used to build each word as we iterate through the input string.

3. Iterate Through the String:

for (let i = 0; i < string.length; i++) {

- Use a for loop to iterate through each character of the input string.

4. Check for Space Characters:

if (string[i] === ' ') {
    if (word.length > 0) {
    result.push(word);
    word = '';
    }
} else {
    word += string[i];
}

- If the current character is a space (' '), check if word is not empty.

    - If word is not empty, push it to result and reset word to an empty string.

- If the current character is not a space, append it to word.

5. Return the Result:

- Return the result array, which now contains all the words from the input string.

- This implementation ensures that the last word is processed correctly by appending a space at the end of the string, thus simplifying the logic and avoiding the need for an additional check. */
