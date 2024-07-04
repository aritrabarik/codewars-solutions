/* Problem Link: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)

"1234"   -->  true

"12345"  -->  false

"a234"   -->  false  */

function validatePIN(pin) {
    //return true or false
    if (pin.length === 4 || pin.length === 6) {
        for (let i = 0; i < pin.length; i++) {
            if (!isDigit(pin[i])) return false;
        }
        return true;
    }
    return false;
}

function isDigit(char) {
    return char >= "0" && char <= "9";
}

/* Explanation:

1. Length Check:

- The function validatePIN first checks if the length of the input string pin is either 4 or 6. If not, it immediately returns false.

2. Digit Check:

- If the length is valid, the function iterates through each character in the string.

- For each character, it calls the isDigit function to check if the character is a digit (between '0' and '9').

- If any character is not a digit, the function returns false.

3. Return Result:

- If all characters are digits and the length is valid, the function returns true.

Examples:

- validatePIN("1234") returns true.

- validatePIN("12345") returns false.

- validatePIN("a234") returns false.

- validatePIN("123456") returns true.

This implementation ensures that the input string is a valid PIN code by checking both the length and the character content of the string. */
