// Given a string, find all possible permutations of the string, return your answers in an array

// 'abc' => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
// 'ab' => ['ab', 'ba']
// '111' => ['111', '111', '111', '111', '111', '111']

const allStringPermutations = str => {
  const results = [];
  if(str.length === 1) {
    results.push(str);
  }
  for(let i = 0; i < str.length; i++) {
    let current = str[i];
    let restPermutations = allStringPermutations(str.slice(0, i) + str.slice(i + 1));
    for(let x = 0; x < restPermutations.length; x++) {
      results.push(current + restPermutations[x]);
    }
  }
  return results;
}