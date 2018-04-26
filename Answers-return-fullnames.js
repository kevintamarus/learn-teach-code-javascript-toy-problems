/*
given an array called "names", which is an array of objects, return each object that has a last name

your output should return => ["John Smith", "Jane Doe"]

extra credit: use .reduce to solve this challenge!
*/

const names = [
  {
    first: "John",
    last: "Smith"
  },
  {
    first: "James",
    last: ""
  },
  {
    first: "Jane",
    last: "Doe"
  },
]

//for loop
const printFullNames = names => {
  const results = [];
  for(let i = 0; i < names.length; i++) {
    if(names[i].last) {
      results.push(names[i].first + ' ' + names[i].last);
    }
  }
  return results;
}

//filter and map
const printFullNames = names => {
  return names.filter(name => name.last).map(name => `${name.first} ${name.last}`);
}

//reduce
const printFullNames = names => {
  return names.reduce((acc, name) => (
    name.last ? acc.concat([`${name.first} ${name.last}`]) : acc
  ), [])
}