// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
  // return [...(n + "")].map((v) => +v);
  let arr = [...(a + "")];
  let output = arr.map((digit) => Number(digit));
  return output;
}
console.log(myFunction(10));
let a = 23456;
const string = a + "";
console.log(string);
const strings = string.split("");
console.log(strings);
//return strings.map(digit => N

let arr = [...(a + "")];
console.log(arr);
