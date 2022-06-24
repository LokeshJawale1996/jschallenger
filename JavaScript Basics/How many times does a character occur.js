// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  return b.split(a).length - 1;
  // return b
  //   .toLowerCase()
  //   .split("")
  //   .filter((el) => el == a).length;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);
// Test cases:
// myFunction('m', 'how many times does the character occur in this sentence?')
// Expected
// 2
// myFunction('h', 'how many times does the character occur in this sentence?')
// Expected
// 4
// myFunction('?', 'how many times does the character occur in this sentence?')
// Expected
// 1
// myFunction('z', 'how many times does the character occur in this sentence?')
// Expected
// 0
