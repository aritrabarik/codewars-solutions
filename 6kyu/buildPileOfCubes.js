/* Problem Link: https://www.codewars.com/kata/5592e3bd57b64d00f3000047 

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 𝑛^3, the cube above will have volume of (𝑛−1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 𝑛^3 + (𝑛−1)^3 + (𝑛−2)^3 + ... + 1^3 = 𝑚 if such a n exists or -1 if there is no such n.

Examples:

- findNb(1071225) --> 45

- findNb(91716553919377) --> -1 */

function findNb(m) {
    // your code
    let n = 0;
    let totalVolume = 0;

    while (totalVolume < m) {
        n++;
        totalVolume += Math.pow(n, 3);
    }

    return totalVolume === m ? n : -1;
}

/* Explanation: 

1. Initialize Variables:

- 'n' is initialized to 0. This will count the number of cubes.

- 'totalVolume' is initialized to 0. This will accumulate the sum of the cubes volumes.

2. Iterate and Add Volumes:

- Use a 'while' loop to keep adding cubes volumes until 'totalVolume' is greater than or equal to 'm'.

- Increment 'n' by 1 in each iteration.

- Add the volume of the 'n'-th cube ('n^3') to 'totalVolume'.

3. Check Result:

- After the loop, check if 'totalVolume' equals 'm'.

- If they are equal, return 'n' as the required number of cubes.

- If 'totalVolume' exceeds 'm' and the loop exits, return '-1' indicating no such n exists.

Examples:

- findNb(1071225):

The function will iterate and find that the sum of cubes from 1^3 to 45^3 equals 1071225, so it returns 45.

findNb(91716553919377):

The function will iterate and find that no such n exists where the sum of cubes equals 91716553919377, so it returns -1.

This implementation efficiently finds the number of cubes needed or determines that it is not possible. */
