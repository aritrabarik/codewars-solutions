/* Problem Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"

accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z. */

function accum(s) {
    // your code
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += s[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            result += s[i].toLowerCase();
        }
        if (i < s.length - 1) result += "-";
    }
    return result;
}

/* Explanation:

1. Initialize Result String:

- Create an empty string result to store the final result.

2. Iterate Through the Input String:

- Use a for loop to iterate over each character in the input string s.

3. Build Each Segment:

- For each character s[i], first add the uppercase version of the character to result.

- Then, use a nested for loop to add the lowercase version of the character i times.

4. Add Hyphens:

- Add a hyphen '-' after each segment except the last one.

5. Return the Result:

- After processing all characters, return the result string.

Examples:

- accum("abcd") returns "A-Bb-Ccc-Dddd"

- accum("RqaEzty") returns "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

- accum("cwAt") returns "C-Ww-Aaa-Tttt"

This implementation builds the result string step by step, adding the appropriate uppercase and lowercase letters and inserting hyphens between segments. */
