// Given an array of letters, find all possible permutations, return your answers in an array

// ['a', 'b', 'c'] => [['a', 'b' ,'c'], ['a', 'c', 'b'], ['b', 'a', 'c'], ['b', 'c', 'a'], ['c', 'a', 'b'], ['c', 'b', 'a']]
// ['a', 'b'] => [['a', 'b'], ['b', 'a']]
// ['a', 'a', 'a'] => [['a', 'a', 'a'], ['a', 'a', 'a'], ['a', 'a', 'a'], ['a', 'a', 'a'], ['a', 'a', 'a'], ['a', 'a', 'a']]

const allArrayPermutations = arr => {
  const results = [];
  for(let i = 0; i < arr.length; i++) {
    let rest = allArrayPermutations(arr.slice(0, i).concat(arr.slice(i + 1)));
    if(rest.length === 0) {
      results.push([arr[i]]);
    } else {
      for(let x = 0; x < rest.length; x++) {
        results.push([arr[i]].concat(rest[x]));
      }
    }
  }
  return results;
}