// solve this challenge using multiple functions listed below

// given an array of numbers, return an array with all the numbers multiplied by 5

// [1, 2, 3] => [5, 10, 15]
// [0, 0 ,0] => [0, 0 ,0]

const arrayTimesFive = arr => {
  return arr.map(n => numberTimesFive(n));
}

const numberTimesFive = n => {
  return n * 5;
}