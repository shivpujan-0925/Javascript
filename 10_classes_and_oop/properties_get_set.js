// before class

function User(email , password){
      this._email = email;
      this._password = password;

      Object.defineProperty(this, "email",{
            get: function(){
              return  this._email.toUpperCase();
            },

            set: function(value){
                 this._email = email;
            }
      })
     
       Object.defineProperty(this, "password",{
            get: function(){
              return  this._password.toUpperCase();
            },

            set: function(value){
                 this._password = email;
            }
      })

}

const chai = new User("chai@chai.in", "chai26");
console.log(chai.email);
