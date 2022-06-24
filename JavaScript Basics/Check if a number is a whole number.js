// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(a) {
  // return ~~a === a
  return Number.isInteger(a);
  // return a - Math.floor(a) == 0;
}

console.log(myFunction(4));

// Test cases
// myFunction(4)
// Expected
// true
// myFunction(1.123)
// Expected
// false
