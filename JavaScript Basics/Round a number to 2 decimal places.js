// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(num) {
  // return Math.round((n + Number.EPSILON) * 100) / 100;
  return Number(num.toFixed(2));
}

console.log(myFunction(2.12397));
/*
bug found in the author's solution

function myFunction(num) {
  return Number(num.toFixed(2));
}

myFunction(24.235), author's function will return 24.23.
expected: 24.24
*/

// Test Cases:
// Attempted: 26871
// Solved: 4531
// myFunction(2.12397)
// Expected
// 2.12
// myFunction(3.136)
// Expected
// 3.14
// myFunction(1.12397)
// Expected
// 1.12
// myFunction(26.1379)
// Expected
// 26.14
