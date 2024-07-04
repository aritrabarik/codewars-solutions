/* Problem Link: https://www.codewars.com/kata/551f37452ff852b7bd000139

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

function addBinary(a, b) {
    let sum = a + b;
    let binaryNum = "";
    if (sum === 0) return "0";

    while (sum > 0) {
        binaryNum = (sum % 2) + binaryNum;
        sum = Math.floor(sum / 2);
    }

    return binaryNum;
}

/* Explanation:

1. Addition:

- The function addBinary takes two arguments, a and b, which are the numbers to be added.

- It calculates the sum of a and b.

2. Conversion to Binary:

- Initialize an empty string binary to store the binary representation.

- If the sum is 0, return '0' as its binary representation.

- Use a while loop to repeatedly divide the sum by 2 and prepend the remainder to the binary string.

- sum % 2 gives the remainder when sum is divided by 2, which is either 0 or 1.

- Math.floor(sum / 2) reduces the sum by half (ignoring the remainder).

3. Return the Result:

- The loop continues until sum becomes 0.

- The function returns the binary string representation of the sum.

Examples:

- addBinary(1, 1) returns "10".

- addBinary(5, 9) returns "1110".

This implementation manually constructs the binary representation of the sum by repeatedly dividing by 2 and collecting the remainders, effectively performing the binary conversion without using any built-in methods. */
