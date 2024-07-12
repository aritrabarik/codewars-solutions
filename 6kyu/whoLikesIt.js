/* Problem Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"

["Peter"]                         -->  "Peter likes this"

["Jacob", "Alex"]                 -->  "Jacob and Alex like this"

["Max", "John", "Mark"]           -->  "Max, John and Mark like this"

["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases. */

function likes(names) {
    // TODO
    if (names.length === 0) return "no one likes this";
    else if (names.length === 1) return `${names[0]} likes this`;
    else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
    else if (names.length === 3)
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else
        return `${names[0]}, ${names[1]} and ${
            names.length - 2
        } others like this`;
}

/* Explanation:

1. Check the Length of the Input Array:

- If the array names is empty, return "no one likes this".

- If the array contains exactly one name, return that name followed by " likes this".

- If the array contains exactly two names, return those names separated by " and " followed by " like this".

- If the array contains exactly three names, return the names separated by commas and " and " followed by " like this".

- If the array contains four or more names, return the first two names followed by " and X others like this" where X is the number of additional names.

Examples:

- likes([]) returns "no one likes this".

- likes(["Peter"]) returns "Peter likes this".

- likes(["Jacob", "Alex"]) returns "Jacob and Alex like this".

- likes(["Max", "John", "Mark"]) returns "Max, John and Mark like this".

- likes(["Alex", "Jacob", "Mark", "Max"]) returns "Alex, Jacob and 2 others like this".

This implementation handles all the specified cases and generates the correct text based on the number of names in the input array. */
