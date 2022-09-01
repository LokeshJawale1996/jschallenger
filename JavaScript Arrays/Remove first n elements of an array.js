// Write a function that takes an array (a) as argument
// Remove the first 3 elements of 'a'
// Return the result

function myFunction(a) {
  console.log(a);
  return a.slice(3);
}

console.log(myFunction([2, 3, 4, 5, 6, 7, 8]));

//The most recommended and easy way to remove certain elements from an array is
// to use the slice method.
