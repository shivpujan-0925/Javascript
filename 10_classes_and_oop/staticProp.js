class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }

    static createId(){     //using 'static' to stop access
        return `2529`
    }
}



const user1 = new User("radhe")
// console.log(user1.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email


    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com");
// iphone.logMe()
console.log(iphone.createId())