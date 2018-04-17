// can you write a function that reverses a string?
// 'sample' => 'elpmas'
// 'racecar' => 'racecar'
// 'string' => 'gnirts'

const reverseString = str => {
  let result = '';
  for(let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

const reverseString = str => {
  return str.split('').reverse().join('');
}

// O(n) linear