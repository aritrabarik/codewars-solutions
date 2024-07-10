/* Problem Link: https://www.codewars.com/kata/5264d2b162488dc400000001

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 

"This is a test        --> "This is a test" 

"This is another test" --> "This is rehtona test" */

function spinWords(string) {
    //TODO Have fun :)
    let words = string.split(" ");
    let newStr = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            let revStr = "";
            for (let j = words[i].length - 1; j >= 0; j--) {
                revStr += words[i][j];
            }
            newStr += revStr;
        } else {
            newStr += words[i];
        }

        if (i < words.length - 1) newStr += " "; // Add a space between words
    }
    return newStr;
}

/* Explanation with Example "Hey fellow warriors"

1. Function Definition and Initialization:

function spinWords(string) {
  let words = string.split(" ");
  let newStr = "";

- The function spinWords takes a single parameter string.

- let words = string.split(" "); splits the input string into an array of words using space as a delimiter.

- For "Hey fellow warriors", words becomes ["Hey", "fellow", "warriors"].

- let newStr = ""; initializes an empty string to build the result.

2. Iterate Through Each Word:

for (let i = 0; i < words.length; i++) {

- This loop iterates through each word in the words array.

- words.length is 3 for this example, so i will range from 0 to 2.

3. Check Word Length and Reverse if Necessary:

if (words[i].length >= 5) {
  let revStr = "";
  for (let j = words[i].length - 1; j >= 0; j--) {
    revStr += words[i][j];
  }
  newStr += revStr;
} else {
  newStr += words[i];
}

- For each word, check if its length is 5 or more.

- If words[i].length >= 5:

    - Initialize revStr to an empty string.

    - Use a nested loop to iterate through the characters of the word in reverse order.

    - Append each character to revStr to build the reversed word.

    - Append revStr to newStr.

- If the word's length is less than 5, append the word as it is to newStr.

* Iteration Details:

- i = 0: Word is "Hey" (length is 3):

    - newStr += words[i]; results in newStr = "Hey".

- i = 1: Word is "fellow" (length is 6):

    - Initialize revStr = "";.

    - Reverse loop through "fellow":

        * j = 5: revStr += "w"; -> revStr = "w".

        * j = 4: revStr += "o"; -> revStr = "wo".

        * j = 3: revStr += "l"; -> revStr = "wol".

        * j = 2: revStr += "l"; -> revStr = "woll".

        * j = 1: revStr += "e"; -> revStr = "wolle".

        * j = 0: revStr += "f"; -> revStr = "wollef".

        * newStr += revStr; results in newStr = "Hey wollef".

- i = 2: Word is "warriors" (length is 8):

    - Initialize revStr = "";.
    
    - Reverse loop through "warriors":

        * j = 7: revStr += "s"; -> revStr = "s".

        * j = 6: revStr += "r"; -> revStr = "sr".

        * j = 5: revStr += "o"; -> revStr = "sro".

        * j = 4: revStr += "i"; -> revStr = "sroi".

        * j = 3: revStr += "r"; -> revStr = "sroir".

        * j = 2: revStr += "r"; -> revStr = "sroirr".

        * j = 1: revStr += "a"; -> revStr = "sroirra".

        * j = 0: revStr += "w"; -> revStr = "sroirraw".

        * newStr += revStr; results in newStr = "Hey wollef sroirraw".

4. Add Spaces Between Words:

if (i < words.length - 1)
  newStr += " ";

- Add a space after each word except the last word.

- For i = 0, newStr becomes "Hey ".

- For i = 1, newStr becomes "Hey wollef ".

5. Return the Result:

return newStr;

- After the loop completes, return newStr.

- For the example "Hey fellow warriors", the final result is "Hey wollef sroirraw".

Example Usage:

- console.log(spinWords("Hey fellow warriors"));  // "Hey wollef sroirraw"

- console.log(spinWords("This is a test"));       // "This is a test"

- console.log(spinWords("This is another test")); // "This is rehtona test" */
