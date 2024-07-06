/* Problem Link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

Given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s) {
    let words = s.split(" ");

    let shortestWord = words[0].length;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestWord) shortestWord = words[i].length;
    }

    return shortestWord;
}

/* Explanation:

1. Split the String into Words:

- Use the split method to split the input string into an array of words based on spaces.

2. Initialize the Shortest Length:

- Set shortestLength to the length of the first word in the array.

3. Find the Shortest Length:

- Iterate through the array starting from the second word.

- If the length of the current word is less than shortestLength, update shortestLength with 
  the length of the current word.

4. Return the Shortest Length:

- After the loop, shortestLength will contain the length of the shortest word in the
  string, which is then returned.
  
Examples:

1. findShortestWordLength("The quick brown fox jumps over the lazy dog") returns 3 (shortest words are "The", "fox", "the", "dog").

2. findShortestWordLength("A journey of a thousand miles begins with a single step") returns 1 (shortest words are "A", "a", "a").

3. findShortestWordLength("To be or not to be that is the question") returns 2 (shortest words are "To", "be", "or", "to", "be", "is"). */
