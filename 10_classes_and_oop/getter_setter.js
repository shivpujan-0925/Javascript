class User{
       constructor(email,password){
           this.email = email;
           this.password = password;
       }


         get email(){
             return this._email.toUpperCase();
         }

         set email(value){
              this._email = value;
         }

       get password(){
       //       return this._password.toUpperCase()
               return `${this._password}radhe`;
       }

       set password(value){
             this._password = value;
       }
}

const user1 = new User("radhe@google.com", "2529");

console.log(user1.password);
console.log(user1.email);

