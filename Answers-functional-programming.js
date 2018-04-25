// solve this challenge using multiple functions listed below

// given an array of numbers, return an array with all the numbers multiplied by 5

const arrayTimesFive = arr => {
  return arr.map(n => numberTimesFive(n));
}

const numberTimesFive = n => {
  return n * 5;
}