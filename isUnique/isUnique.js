/* 
* Implement an algorithm to determine if a string has all unique characters.
* Extra Credit - Answer this question - What if you cannot use additional data structures?
*/

// Create a loop to check individual characters and check to see if it was used before
// charAt() method returns the character at a specific index.
// str.indexOf('a', 5) find the first occurance of a letter in a string. ex: a, start position at 5
// const str = 'abcdhijklmnopqrstuv';
const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) {
        return 'Not unique!'
      }
    }
  }
  // if no duplicate string return true
  return 'this string is unique!';
}

console.log(isUnique('abcdhijklmnopqrstuv')); // true
console.log(isUnique('abcdefga')); // false