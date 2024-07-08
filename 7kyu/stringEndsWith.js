/* Problem Link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true

solution('abc', 'd') // returns false */

function solution(str, ending) {
    // TODO: complete
    if (ending === "") return true;

    const endingLength = ending.length;

    const strEnding = str.slice(-endingLength);

    return strEnding === ending;
}

/* Explanation:

1. Check for Empty Ending:

- If ending is an empty string, the function returns true immediately because any string ends with an empty string by definition.

2. Calculate the Length of the Ending:

- Use ending.length to get the length of the second argument, which represents the string we are checking for at the end of the first argument.

3. Extract the End of the First String:

- Use str.slice(-endingLength) to get the substring from the end of the first string (str) with the same length as the ending string.

- The slice method with a negative argument extracts characters from the end of the string.

4. Compare the Extracted Substring with the Ending:

- Compare the extracted substring (strEnding) with the ending string using the strict equality operator (===).

5. Return the Result:

Return true if the two strings match, otherwise return false.

Examples:

- solution('abc', 'bc') returns true because "abc" ends with "bc".

- solution('abc', 'd') returns false because "abc" does not end with "d".

- solution('abc', '') returns true because any string ends with an empty string. */
