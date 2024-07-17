/* Problem Link: https://www.codewars.com/kata/546f922b54af40e1e90001da 

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example

Input = "The sunset sets at twelve o' clock."

Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" */

function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();

        // Check if the character is a letter
        if (char >= "a" && char <= "z") {
            // Convert the character to its position in the alphabet
            let position = char.charCodeAt(0) - "a".charCodeAt(0) + 1;

            // Append the position to the result string
            result += position + " ";
        }
    }

    // Trim any trailing space and return the result
    return result.trim();
}

/* Explanation:

1. Function Definition:

- This defines a function named alphabetPosition that takes a single parameter text.

2. Initialize Result String:

- An empty string result is initialized to store the positions of the letters as we process the input string.

3. Iterate through the Input String:

- A for loop is used to iterate through each character of the input string text.

- text.length gives the length of the input string, so the loop runs from 0 to text.length - 1.

4. Convert Character to Lowercase:

- text[i] accesses the character at index i of the input string.

- toLowerCase() converts the character to lowercase to handle case insensitivity.

- For the first iteration (i = 0), text[0] is 'T', which is converted to 't'.

5. Check if the Character is a Letter:

- This condition checks if the character char is between 'a' and 'z', inclusive.

- If char is a letter, we proceed to the next step; otherwise, we skip to the next iteration of the loop.

6. Convert the Character to its Alphabet Position:

- char.charCodeAt(0) gets the ASCII code of the character char.

- 'a'.charCodeAt(0) gets the ASCII code of 'a' (which is 97).

- Subtracting these values gives a zero-based index (e.g., 't'.charCodeAt(0) - 'a'.charCodeAt(0) results in 19 for 't').

- Adding 1 converts this to a one-based index (e.g., 19 + 1 results in 20 for 't').

7. Append the Position to the Result String:

- The position of the letter is appended to the result string, followed by a space.

- For the first iteration (i = 0), the position 20 is appended, making result now "20 ".

8. Continue Looping:

- The loop continues with the next character, performing the same steps as above for each character in the input string.

9. After the Loop - Trim the Trailing Space and Return the Result:

- After the loop finishes, trim() removes any trailing space from the result string.

- The final result string is returned. */
