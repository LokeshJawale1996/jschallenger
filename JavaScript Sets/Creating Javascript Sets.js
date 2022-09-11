// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

function myFunction(a, b, c) {
  return new Set([a, b, c]);
}

function myFunction2(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}

console.log(myFunction(1, "b", 3)); //new Set([1, 'b', 3])
console.log(myFunction(NaN, null, false)); //new Set([NaN, null, false])
console.log(myFunction("a", ["b"], { c: 3 })); //new Set(['a', ['b'], { c: 3 }])

console.log(myFunction2(NaN, null, false)); //new Set([NaN, null, false])
console.log;
