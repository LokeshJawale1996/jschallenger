// Clear up the chaos behind these strings

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside',
// and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a, b) {
  const str = a.concat(b.split("").reverse().join("")).replaceAll("%", "");
  return str[0].toUpperCase() + str.slice(1);

  // AUTHOR'S:
  // const first = a.split('').map(part => part.replace('%', '')).join('');
  // const second = b.split('').reverse().map(part => part.replace('%', '')).join('');
  // return first.charAt(0).toUpperCase() + first.slice(1) + second
}

console.log(myFunction("java", "tpi%rcs")); // 'Javascript'
console.log(myFunction("c%ountry", "edis")); // 'Countryside'
console.log(myFunction("do%wn", "nw%ot")); // 'Downtown'

let str1 = "lokesh";
let str2 = "el%awaj";
let str3 = str1.concat(str2);
console.log(str3);
let str4 = str1.concat(str2.split("").reverse());
console.log(str4);
let str5 = str1.concat(str2.split("").reverse().join(""));
console.log(str5);
let str6 = str1.concat(str2.split("").reverse().join("")).replaceAll("%", "");
console.log(str6);
let str7 = str6[0].toUpperCase() + str6.slice(1);
console.log(str7);
return str7;
