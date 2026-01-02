const name = "Radhe"
const repoCount = 20
// console.log(name + repoCount + " value");

// console.log(`My name is ${name} and My Repo_Count is ${repoCount} `);

const gameName = new String("Radhe25s-29");

//string-methods:

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString= gameName.slice(-8 , 4)
console.log(anotherString);

const newStringOne = "    radhe    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://radhe.com/radhe%25google.com"
console.log(url.replace("%25", "-"));

console.log(url.includes("radhe"));

console.log(gameName.split("-"));


 


















