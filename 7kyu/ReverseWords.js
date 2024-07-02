/* Problem Link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" 
*/

function reverseWords(str) {
    // Go for it
    let result = "";
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result += reverseWord(word) + " ";
            word = "";
        } else word += str[i];
    }
    result += reverseWord(word);
    return result;
}

function reverseWord(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) reversed += word[i];

    return reversed;
}

/* Explanation:

1. reverseWords function:

- Initialize result as an empty string to store the final result.

- Initialize word as an empty string to accumulate characters of the current word.

- Iterate through each character in the input string str.
    
    - If the character is a space, reverse the accumulated word using reverseWord, add it   to result, and append a space.
    
    - If the character is not a space, append it to word.

- After the loop, reverse and add the last word to result.

2. reverseWord function:

- Initialize reversed as an empty string to store the reversed word.

- Iterate through the input word from the end to the beginning, appending each character to reversed.

- Return the reversed word.

Examples:

- reverseWords("This is an example!") returns "sihT si na !elpmaxe".

- reverseWords("double spaces") returns "elbuod secaps".

This implementation achieves the desired result without relying on inbuilt functions like split, map, reverse, or join. */
