// if

//Syntax-
// if(condition){      //for execution condition should be true.

// }


const isLogggedIn = true
// if(isLogggedIn){
//    console.log("User logged in");
   
// }

// if(2 === "2"){
//     console.log("executed");
    
// }

const temperature = 20
// if(temperature > 40){
//     console.log("Sunny days");
    
// }
// else{
//     console.log("cold days");
    
// }

// <, > , <= , >=, ==, !=, ===(strict check) 


// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`);   //give error due to scope

//shorthand  [dont use because this is unreadable]
// const balance = 1000
// // if(balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if(balance < 750){
//     console.log("less than 750");
    
// } else if(balance < 900){
//       console.log("less than 900");
      
// } else{
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("User allowed to Buy Course");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged IN");
    
}