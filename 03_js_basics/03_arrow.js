const user = {
   username: "radhe",
   price: 999,

   welcomeMessage: function () {
      console.log(`${this.username}, welcome to website`);
      console.log(this);

   }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//    let username = "radhe"
//    console.log(this.username);

// }
// chai()

// const chai = function(){
//    let username = "radhe"
//    console.log(this.username);
// }
// chai()


const chai = () => {
   let username = "radhe"
   console.log(this.username);
   console.log(this);
   
}
// chai()


//Arrow function

// const addTwo = (num1, num2)=>{            //explicit return
//    return num1 + num2

// }

// const addTwo = (num1, num2)=> num1 + num2     //implicit return
//  const addTwo = (num1, num2)=> (num1 + num2)

 const addTwo = (num1, num2)=> ({username:"radhe"})

console.log(addTwo(3,4));
