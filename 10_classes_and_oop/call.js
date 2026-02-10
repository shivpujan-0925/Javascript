function setUsername(username){

    //complex DB calls
    this.username = username
    console.log("Called");
    
}

function createUser(username, email, password){

    // setUsername(username)

    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const user1 = new  createUser("radhe", "radhe@gmail.com", "2529")

console.log(user1);
