// class User {
//     constructor(username, email, password){
//          this.username = username;
//          this.email = email;
//          this.password = password;
//     }


//     encryptPassword(){
//         return `${this,this.password}acd`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1 = new User("radhe", "radhe@gmail.com", "heyRadhe");

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());


//behind the scene

function User(username, email, password){
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}

User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const raja = new User('Raja', "raja@gmail.com", "raj")

console.log(raja.encryptPassword());
console.log(raja.changeUsername());
