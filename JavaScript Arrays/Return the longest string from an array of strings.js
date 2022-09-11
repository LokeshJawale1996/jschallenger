// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(arr) {
  return arr.reduce((acc, cur) => (acc.length >= cur.length ? acc : cur));
}

console.log(myFunction(["help", "me"])); //help
console.log(myFunction(["I", "need", "candy"])); //candy
