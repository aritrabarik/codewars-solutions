/* Problem Link:

A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task

Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false */

var isSquare = function (n) {
    if (n < 0) return false;

    let i = 0;
    while (i * i <= n) {
        if (i * i === n) return true;

        i++;
    }
    return false; // fix me
};

/* Explanation:

1. Check for Negative Number:

- If n is less than 0, it cannot be a perfect square, so the function returns false.

2. Iterate to Find Perfect Square:

- Initialize a variable i to 0.

- Use a while loop to iterate as long as i * i is less than or equal to n.

- If i * i equals n at any point, n is a perfect square, and the function returns true.

- Increment i and continue the loop.

3. Return the Result:

- If the loop completes without finding any integer i such that i * i equals n, return false because n is not a perfect square.

Examples:

- isSquare(-1) returns false because -1 is negative and not a perfect square.

- isSquare(0) returns true because 0 is a perfect square (0 * 0 = 0).

- isSquare(3) returns false because 3 is not a perfect square.

- isSquare(4) returns true because 4 is a perfect square (2 * 2 = 4).

- isSquare(25) returns true because 25 is a perfect square (5 * 5 = 25).

- isSquare(26) returns false because 26 is not a perfect square.

This implementation manually checks for perfect squares by iterating through possible integers and squaring them until the square exceeds the given number. If a match is found, it returns true; otherwise, it returns false. */
