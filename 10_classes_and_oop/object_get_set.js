const User = {
       _email: "radhe@google.com",
       _password: "abcg" ,


       get email(){
           return this._email.toUpperCase();
       },

       set email(value){
           this._email = value;
        }

}

const tea = Object.create(User);
console.log(tea.email);
