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

console.log(typeof MyFunction);
console.log(typeof heros);





