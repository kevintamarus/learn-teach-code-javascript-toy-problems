/*
given a sentence, find the longest palindrome.
Use a series of functions to complete this challenge!

"this is a racecar with no radar, its nickname is tacocat" => "tacocat"
*/

const longestPalindrome = sentence => {
  let palindromes = sentence.split(' ').filter( x => isPalindrome(x)).sort(sortAscendingByLength);
  return palindromes[palindromes.length - 1];
}

const reverseString = str => {
  return str.split('').reverse().join('');
}

const isPalindrome = str => {
  if(reverseString(str) === str) {
    return true;
  }
  return false;
}

// optional function
const sortAscendingByLength = (a, b) => {
  return a.length > b.length;
}