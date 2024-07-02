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
