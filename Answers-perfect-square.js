/*
Write a function that will return true if the input is a perfect square, and will return false if it's not

4 => true
16 => true
0 => true
5 => false
27 => false
-16 => false
*/

const isPerfectSquare = n => {
  if(n === 0 || n === 1) {
    return true;
  }
  let count = 2;
  while(count <= n) {
    if(count * count === n) {
      return true;
    }
    if(count * count > n) {
      return false;
    }
  }
  return false;
}

// can you solve it using recursion?
const isPerfectSquare = n => {
  if(n === 0 || n === 1) {
    return true;
  }
  const recursion = num => {
    if(num * num === n) {
      return true;
    } else if(num * num > n) {
      return false;
    } else {
      return recursion(num + 1);
    }
  }
  return recursion(1);
}