
function sayMyName() {
    console.log("R");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("E");
}

// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);

// }

function addTwoNumbers(num1, num2) {
    //    let result = num1 + num2
    //    return result

    return num1 + num2

}

const result = addTwoNumbers(9, 4);
// console.log("Result:",result);

function loginUserMessage(username = "anonymouse") {  
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }

     if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged In`

}

const message = loginUserMessage("radhe")
// console.log(message);

// function calculateCartPrice(...num1){    // ... => rest operator (in case of function parameter)
//     return num1
// }
// console.log(calculateCartPrice(25, 30,90));    // O/P-> [25, 30, 90]


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(100,200,300,400));  // O/P=> [300, 400]  | but 100 & 200 assigned to val1 and val2


const user = {
    username:"radhe",
    prices:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"shanu",
    price:499
})

const myNewArray =[100,200,300, 400]

function returnSecondValue(getArray){
   return getArray[1]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));










