/*
Given a sentence(string), replace any 'foo' words in the sentence with 'bar'

hint: you can use RegEx

"These words cannot foo me" => "These words cannot bar me"
*/

const exampleSentence = "These words cannot foo me"

const regexReplace = sentence => {
  return sentence.replace(new RegExp('foo'), 'bar');
}