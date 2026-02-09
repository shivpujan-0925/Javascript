// let myName = "radhe    "

// function trim(myName){
//    this.username = myName;
// }

// trim.prototype.truelength = function(){
//     this.username.trim();
// }


let myHero = [ "thor", "spiderman"]

let heroPower = {
    thor : "Hammer",
    spider:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${spiderman}`);
        
    }
}

Object.prototype.radhe = function(){
    console.log("Radhe is loggedIn");
    
}

Array.prototype.heyRadhe = function(){
    console.log("radhe says Hello");
    
}


// heroPower.radhe();  
// myHero.radhe();

// myHero.heyRadhe();
// heroPower.heyRadhe();


//InHeritance:

const User = {
   username: "radhe",
   email: "radhe@google.com"
}

const Teacher = {
    makeVideo: true,

}

const TeachingSupport = {
   isAvailable: false,

}

const TASupport = {
    makeAssignment: "Js assignment",
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = "rishav    ";

String.prototype.trueLength = function(){
   
   console.log(`${this}`);
   
    console.log(`True length is ${this.trim().length}`);
    
    
    
}

anotherUser.trueLength();
"radhe".trueLength()
"abhishek".trueLength()
