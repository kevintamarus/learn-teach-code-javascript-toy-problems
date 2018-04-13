// given a sequence n, find the fibonacci number at the sequence
// fibonacci sequence example: 1, 1, 2, 3, 5, 8, 13, 21, 34...
// 1 => 1
// 2 => 1
// 5 => 5
// 6 => 8
// 9 => 34

const fib = n => {
  const fibNumbers = [1,1];
  while(n > fibNumbers.length) {
    fibNumbers.push(fibNumbers[fibNumbers.length - 1] + fibNumbers[fibNumbers.length - 2]);
  }
  return fibNumbers[n - 1];
}

// can you solve it using recursion?
const fib2 = n => {
  if(n < 3) {
    return 1;
  }
  return fib2(n - 1) + fib2(n - 2);
}