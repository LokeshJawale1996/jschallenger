// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(a, v) {
  console.log(a);
  return a.filter((a) => a !== v);
}

console.log(myFunction([2, 6, 8, 4], 4));

//To remove all elements in an array that have a specific value,
//we will use the array.filter method.
//This method is used to filter array elements based on certain conditions.
// This can be applied to our problem.
