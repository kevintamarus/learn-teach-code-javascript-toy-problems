/*
write a function that checks and returns the input's type

ex: if the input is a function, it should return 'function'
if the input is an array, it should return 'array'
if the argument is missing, it should return => 'no input provided'

check for: numbers, strings, booleans, functions, arrays, objects
*/

function typeCheck(input) {
  if(arguments.length === 0) {
    return 'no input provided';
  }
  if(Array.isArray(input)) {
    return 'array';
  }
  return typeof input;
}