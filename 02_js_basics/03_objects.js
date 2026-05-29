//Singleton
// Object.create

// Object Literal

const mySym = Symbol("key1")

const JsUser = {
    "full name":"shivpujan",
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
// console.log(JsUser.email);
// Object.freeze(JsUser)        //after freez the object, can't change anything in Onjects.
JsUser.email = "radhe@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


//____________________________________________________________________________________________________________

           //revisit  objects learning


  const computer = {
    name : "samsung glaxybook",
    storage : 512,
    ram: 16,
    speaker : "Dolby atoms",
    owner : "radhe"

}
computer.name = "samsung glaxybook4";    
console.log(computer.name);
console.log(computer.owner);

// Object.freeze(computer.owner);   //Not works ? why  : owner is a simple string , Not a objects
Object.freeze(computer)    //it works and [completely locked all properties inside  computer objects]
computer.owner = "shivu"   //Not change becoz objects are freezed
console.log(computer)









