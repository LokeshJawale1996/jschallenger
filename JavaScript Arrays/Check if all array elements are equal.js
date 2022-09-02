// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
  return arr.every((v) => v === arr[0]);
}

function myFunction1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        return false;
      }
    }
  }
  return true;
}

function myFunction2(arr) {
  return new Set(arr).size === 1;
}

console.log(myFunction([1, 1, 1, 1, 1, 1, 1])); //true
console.log(myFunction([2, 3, 4, 4, 4, 4, 4])); //false
console.log(myFunction1([2, 2, 2, 2, 2, 2, 2])); //true
console.log(myFunction1([1, 1, 1, 1, 1, 2, 2])); //false
console.log(myFunction2([3, 3, 3, 3, 3, 3, 3])); //true
console.log(myFunction2([4, 4, 4, 4, 4, 5, 6])); //false
