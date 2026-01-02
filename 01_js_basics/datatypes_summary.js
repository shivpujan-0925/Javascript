// primitive

// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
//example-
const score = 100
const scoreValue = 100.8

const  isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const BigNumber = 2529876453429n

// console.log(typeof scoreValue);



//Reference (Non-Primitive)
// Types: Array, Objects, Function
//example-
const heros = ["jon snow", "arya stark", "kingslayer"]

let myObj = {
    name :"radhe",
    age :21,
    city :"patna"
}

const MyFunction = function(){
    console.log("Hello World");
    
}

// console.log(typeof MyFunction);
// console.log(typeof heros);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   Stack(primitive), Heap(Non-primitive)

let myYoutubeName = "radhe.dev"
let anotherName = myYoutubeName
 anotherName ="radhe-25s.dev"

// console.log(anotherName);
// console.log(myYoutubeName);



let userOne = {
   email:"radhe@gmail.com",
   upi:"radhe@ibl"
}

let userTwo = userOne;
userTwo.email = "shiv@google.com"

console.log(userOne.email);
console.log(userTwo.email);






