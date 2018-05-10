// no constraints

const areThereDuplicates = arr => {
  if(!Array.isArray(arr)) {
    return 'Invalid Entry!';
  }
  for(let i = 0; i < arr.length; i++) {
    for(let x = i + 1; x < arr.length; x++) {
      if(arr[x] === arr[i]) {
        return true;
      }
    }
  }
  return false;
}

// O(1) constant time constraint

const areThereDuplicates2 = arr => {
  if(!Array.isArray(arr)) {
    return 'Invalid Entry!';
  }
  const set = new Set(arr);
  if (set.size !== arr.length) {
    return true;
  }
  return false;
}