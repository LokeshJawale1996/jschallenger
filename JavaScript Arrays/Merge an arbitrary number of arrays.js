// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...args) {
  return args.flat();
}

// The flat() method creates a new array with all sub-array elements concatenated into
// it recursively up to the specified depth.

console.log(myFunction([1, 2, 3], [4, 5, 6])); //[1, 2, 3, 4, 5, 6]

console.log(myFunction(["a", "b", "c"], [4, 5, 6])); //['a', 'b', 'c', 4, 5, 6]

console.log(myFunction([true, true], [1, 2], ["a", "b"])); //[true, true, 1, 2, 'a', 'b']
