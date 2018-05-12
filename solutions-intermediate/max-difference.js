/*
Given an array of numbers, write a function that will find the max positive difference in that array

[1, 2, 3, 4, 5] => 4
[5, 3, 2, 1, 8] => 7
[4, 9, 2, 3, 6] => 5
*/

const maxDifference = arr => {
  // your code here
}

// can you solve it using O(n) linear time complexity?
const maxDifference = arr => {
  let diff = 0, left = 0, right = 0, indexRight = 0, indexLeft = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[indexLeft]) {
      indexLeft = i;
      if (indexLeft > indexRight) {
        indexRight = indexLeft;
      }
    }
    if (nums[i] >= nums[indexRight]) {
      indexRight = i;
    }
    if (nums[indexRight] - nums[indexLeft] > diff) {
      diff = nums[indexRight] - nums[indexLeft];
      right = indexRight;
      left = indexLeft;
    }
  }
  return [diff, left, right];
}