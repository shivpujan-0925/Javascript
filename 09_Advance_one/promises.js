
const promiseOne = new Promise(function (resolve , reject) {
    //Do an Async task
    //DB calls , 

    setTimeout(function(){
      console.log("ASYNC TASK IS COMPLETED");
      resolve()
      
    },1000)
})

promiseOne.then(function(){
   console.log("Promise consumed");
   
})

//________________________________________________________________________________________

new Promise(function(resolve, reject){
   setTimeout(function(){
      console.log("Async task 2");
      resolve()
      
   },1000)
}).then(function(){
   console.log("task 2 resolved");
   
})


//_____________________________________________________________________________________________


const promiseThree = new Promise(function(resolve, reject){
   setTimeout(function(){
      resolve({username: "radhe", email:"google.radhe.com" } )
   },1000)
})


promiseThree.then(function(user){
    console.log(user)
})


//_____________________________________________________________________________________________


const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
      let error = true;
      if(!error){
           resolve({username: "radhe", password: "1234"})
      }else{
         reject('ERROR : Something went wrong!')
      }
   },1000)
})


promiseFour
.then((user)=>{
  console.log(user);
  return user.username;
  
})
.then((username) => {
   console.log(username);
   
})
.catch(function(err){
   console.log(err);
   
}).finally(() => console.log("The promise is either resolved or rejected"))


//________________________________________________________________________________________________

 const promiseFive = new Promise((resolve, reject) => {
     setTimeout(() => {
      let error = true;
      if(!error){
         resolve({username: "Javascript", email:"js@google.com"})
      }else{
           reject('ERROR: JS went wrong');
      }
     },1000)
 })

async function consumePromiseFive() {
 try {
    const response =  await promiseFive
    console.log(response)
 } catch (error) {
   console.log(error)
 }
}

consumePromiseFive()


//_____________________________________________________________________________________


// async function getAllUsers() {
//    try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//    } catch (error) {
//       console.log(error);
      
//    }
// }

// getAllUsers()

fetch('https://api.github.com/users/shivpujan-0925')
.then((response) => {
   return response.json();
})
.then((data) => {
   console.log(data);
   
})
.catch((error) => console.log(error));
