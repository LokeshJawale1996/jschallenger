// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array

function myFunction(a, n) {
  return a.filter((_, index) => !((index + 1) % n));
}

//from this above funtion we not get the element which index is not divisible by n

function myFunction2(a, n) {
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (rest.length < n) break;
    result.push(rest[n - 1]);
    rest = rest.slice(n);
  }
  return result;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); //[3,6,9]

console.log(myFunction([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5)); //[6,1]
console.log(myFunction([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2)); //[2,4,6,8,10]

//extra stuff practice
let arr = [12, 15, 63, 9, 4, 5, 6, 8, 9, 90, 123];

//find elements of array which is divisible by 3
const result = arr.filter((elem) => elem % 3 === 0);
console.log(result);
//[12, 15, 63, 9, 6, 9, 90, 123]
