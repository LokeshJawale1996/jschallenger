// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers
function myFunction(a) {
  return a.reduce((acc, elem) => acc + elem, 0);
}

console.log(myFunction([10, 100, 1000, 1])); //1111
console.log(myFunction([-50, 0, 50, 200])); //200
console.log(myFunction([10, 100, 40])); //150
