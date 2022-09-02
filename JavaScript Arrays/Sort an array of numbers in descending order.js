// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(myFunction([8, 9, 4, 7, 3, 6])); //8,7,6,4,3
