// given a number n, can you use recursion to find the factorial of n?

const factorial = n => {
  if(n < 1) {
    return 0;
  }
  if(n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}