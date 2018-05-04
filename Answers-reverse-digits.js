/*
Given a number, write a function that will reverse the digits

12345 => 54321
39291 => 19293
0 => 0
*/

// solution 1
const reverseDigits = n => {
  return Number(n.toString().split('').reverse().join(''));
}