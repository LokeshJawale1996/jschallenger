// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(arr, n) {
  console.log(arr);
  return arr.slice(-n);
}

console.log(myFunction([7, 9, 23, 78, 98, 45, 37], 3));
