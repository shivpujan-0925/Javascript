//Singleton
// Object.create

const { useReducer } = require("react")

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
// console.log(computer.name);
// console.log(computer.owner);

// Object.freeze(computer.owner);   //Not works ? why  : owner is a simple string , Not a objects
// Object.freeze(computer)    //it works and [completely locked all properties inside  computer objects]
// computer.owner = "shivu"   //Not change becoz objects are freezed
// console.log(computer)

//task : write a code , to greet person who's owner of the computer 

 computer.greet = function(owner){
   
    if(owner == computer.owner) {
        console.log(`Welcome to the world of algorithm! , ${computer.owner}`);
    }else {
        console.log("access denied");
    }
   
}

// computer.greet("radhe")

//task1: User profile manager

const User = {
    username : "shivu",
    email: "shivu@google.com",
    age : 20,
    isPremium : false
}

//masking email
User.maskEmail = (email) => {
    const [username, domain] = email.split('@');

    if(username.length < 2) {
        return `${username[0]}@${domain}`;

    }

    const maskedEmail = username[0]+ "*".repeat(username.length-2) + username.slice(-1);
    return `${maskedEmail}@${domain}`;

}
User.maskEmail(User.email);

//freeze email
Object.defineProperty(User, 'email', {
    value:"User.email",
    writable:false,
    configurable:false
})


//change premium
User.changePremium = function(){
    // if(User.isPremium == false){
    //     User.isPremium = true;
    // }else{
    //     User.isPremium = false
    // }

    User.isPremium = !User.isPremium;   //flip
}

User.getInfo = function(){
    console.log(`Name: ${User.username} , email: ${User.maskEmail(User.email)}, age : ${User.age}, isPremium : ${User.isPremium} `)
}

User.getInfo();








