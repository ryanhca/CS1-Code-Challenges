/**
 * Common Characters: 
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. * 
 * Your function should return the common characters in the same order that they appear in the first argument. 
 * Do not return duplicate characters and ignore whitespace in your returned string.  * 
 * Example: commonCharacters('acexivou', 'aegihobu')  * 
 * Returns: 'aeiou'
*/

// const commonChars = (str1, str2) => {
//   newStr = '';
//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         newStr.concat(str1[i]);
//       }
//     }
//   }
//   return newStr;
// }

const commonCharacters = (str1, str1) => {
  const obj = {' ': 3}
  let str = '';
  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) obj[str2[i]] = 1;
  }
  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]] === 1) {
      obj[str1[i]] = 2;
      str += str1[i];
    }
  }
  return str;
};