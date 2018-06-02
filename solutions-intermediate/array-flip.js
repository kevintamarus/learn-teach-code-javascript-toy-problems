/*
Given an array of array, write a function that will flip the array upside down.

input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

output:
[
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
]
*/

//sample array
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flipArray = arr => {
  const results = [];
  arr.forEach(nestedArray => results.unshift(nestedArray.reverse()));
  return results;
}