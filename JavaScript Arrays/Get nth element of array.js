// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'

function myFunction(a, n) {
  console.log(a);
  return a[n - 1];
}

console.log(myFunction([2, 3, 4, 5, 6, 7], 2));
