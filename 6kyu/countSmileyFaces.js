/* Problem Link: https://www.codewars.com/kata/583203e6eb35d7980400002a 

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

1. Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`

2. A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`

3. Every smiling face must have a smiling mouth that should be marked with either `)` or `D`

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example

- countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;

- countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;

- countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note:

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same. */

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0;

    // Define valid characters for eyes, noses, and mouths
    const validEyes = [":", ";"];
    const validNoses = ["-", "~"];
    const validMouths = [")", "D"];

    // Helper function to check if a character is in an array
    function isValidCharacter(char, validChars) {
        for (let i = 0; i < validChars.length; i++) {
            if (char === validChars[i]) return true;
        }
        return false;
    }

    // Helper function to check if a face is a valid smiley
    function isValidSmiley(face) {
        if (face.length === 2)
            return (
                isValidCharacter(face[0], validEyes) &&
                isValidCharacter(face[1], validMouths)
            );
        else if (face.length === 3)
            return (
                isValidCharacter(face[0], validEyes) &&
                isValidCharacter(face[1], validNoses) &&
                isValidCharacter(face[2], validMouths)
            );

        return false;
    }

    // Iterate through the array and count valid smiley faces
    for (let i = 0; i < arr.length; i++) {
        if (isValidSmiley(arr[i])) count++;
    }

    return count;
}

/* Explanation:

1. Valid Characters Arrays:

- Define arrays for valid eyes, noses, and mouths: 

const validEyes = [':', ';'];
const validNoses = ['-', '~'];
const validMouths = [')', 'D'];

2. Helper Function isValidCharacter:

- This function checks if a character is in a given array of valid characters:

function isValidCharacter(char, validChars) {
  for (let i = 0; i < validChars.length; i++) {
    if (char === validChars[i]) {
      return true;
    }
  }
  return false;
}

3. Helper Function isValidSmiley:

- This function checks if a given string is a valid smiley face:

function isValidSmiley(face) {
  if (face.length === 2) {
    return isValidCharacter(face[0], validEyes) && isValidCharacter(face[1], validMouths);
  } else if (face.length === 3) {
    return isValidCharacter(face[0], validEyes) && isValidCharacter(face[1], validNoses) && isValidCharacter(face[2], validMouths);
  }
  return false;
}

4. Main Function countSmileys:

- Iterate through the array and count valid smiley faces using isValidSmiley:

for (let i = 0; i < arr.length; i++) {
  if (isValidSmiley(arr[i])) {
    count++;
  }
}
return count;

Example Execution:

- countSmileys([':)', ';(', ';}', ':-D']):

    - Valid smiley faces: :) and :-D.

    - The function returns 2.


- countSmileys([';D', ':-(', ':-)', ';~)']):

    - Valid smiley faces: ;D, :-), and ;~).
    
    - The function returns 3.


- countSmileys([';]', ':[', ';*', ':$', ';-D']):

    - Valid smiley face: ;-D.

    - The function returns 1.

    
This implementation effectively counts valid smiley faces without using the includes method. Instead, it uses a custom isValidCharacter function to check for valid characters. */
