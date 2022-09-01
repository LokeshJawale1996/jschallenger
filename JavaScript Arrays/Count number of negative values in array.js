// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function myFunction(a) {
  console.log(a);
  return a.filter((num) => num < 0).length;
}

console.log(myFunction([4, -2, 7, -6, 5, 8]));
