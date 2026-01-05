//Singleton
// Object.create

// Object Literal

const mySym = Symbol("key1")

const JsUser = {
    "full name":"shiv pujan",
    [mySym]:"myKey1",
    name: "radhe",
    age: 20,
    location: "patna",
    email: "radhe@google.com",
    isLoggedIn: false
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "radhe@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "radhe@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());









