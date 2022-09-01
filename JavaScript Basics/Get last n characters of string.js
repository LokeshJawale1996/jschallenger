// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result

function myFunction(str) {
  return str.slice(-3);
}
console.log(myFunction("abcdefg"));

// Test Cases:
// Attempted: 47359
// Solved: 15007
// myFunction('abcdefg')
// Expected
// 'efg'
// myFunction('1234')
// Expected
// '234'
// myFunction('fgedcba')
// Expected
// 'cba'