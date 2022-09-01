// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array

function myFunction(a) {
  console.log(a);
  return a.slice(0, 3);
}

console.log(myFunction([2, 3, 4, 5, 6, 7, 8, 9]));

//The most recommended and easy way to get certain elements from an array is
// to use the slice method.
