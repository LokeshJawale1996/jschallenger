// Write a function that takes a Set and a value as arguments
// Check if the value is present in the Set

function myFunction(set, v) {
  return set.has(v);
}

console.log(myFunction(new Set([1, 2, 3]), 2)); //true
console.log(myFunction(new Set([123]), 2)); //false
console.log(myFunction(new Set(["1", "2", "3"]), "2")); //true
console.log(myFunction2(new Set("123"), "2")); //true
console.log(myFunction2("a", ["b"], { c: 3 }));
