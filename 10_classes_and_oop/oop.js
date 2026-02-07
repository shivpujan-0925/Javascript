const user = {

       username: "radhe",
       loginCount : 9,
       signedIn: true,

       getUserDetails: function(){
              // console.log("Got all user details from Database");

              // console.log(`username: ${username}`);    X

              console.log(`Username: ${this.username}`);

              console.log(this);    //this => current contex
              
              
              
       }
}
// console.log(User.username);
// console.log(User.getUserDetails());

// console.log(this);


function User(username, loginCount, isLoggedIn){
     this.username = username
     this.loginCount = loginCount
     this.isLoggedIn = isLoggedIn

     this.greeting = function(){
          console.log(`Welcome ${username}`);
          
     }

     return this
}

// const userOne = User("radhe", 10, true)
// const userTwo = User('Chai aur code', 9, false)   //override the userOne, so [this is the reason to use Constructor]
 
const userOne = new User('radhe', 25, true)
const userTwo = new User('Rishav', 29, false)


console.log(userOne.constructor);

// console.log(userOne);
// console.log(userTwo);


//After using 'new' keyword : what happend? 
//     step1- Create a empty object  (called Instance)
     //step2- call a Contsructor function due to 'new' keyword.
     //step3- inject all arguments and ... in object
     //step4- deliver in function



