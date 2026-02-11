class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){

        super(username)    //calling
        this.username = username
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "12341")

// chai.addCourse();

// chai.logMe();

const masalaChai = new User("masala")
masalaChai.logMe()

console.log(chai instanceof Teacher);   //true

console.log(masalaChai instanceof User);  // true
console.log(chai instanceof User);   //true

console.log(masalaChai instanceof Teacher);   //false





