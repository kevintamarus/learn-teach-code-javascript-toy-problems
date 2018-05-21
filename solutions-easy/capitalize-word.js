/*
Given a string, write a function that will return the string with the first letter capitalized

'john' => 'John'
'master' => 'Master'
'Boss' => 'Boxx'
'' => ''
*/

const capitalizeWord = str => {
  return str.slice(0,1).toUpperCase() + str.slice(1);
}