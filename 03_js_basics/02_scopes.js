
// var c = 300

let a = 300

if(true){
   let a = 10
   const b = 20
   console.log("INNER:", a);
   
}


// console.log(a);
// console.log(b);       //not accessible : b'coz  "b" define in the inner part of function , and not accessible from outer.
// console.log(c);

function One(){
    const username = "Radhe"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two();
    
}
One();

if(true){
    const username = "radhe"
    if(username === "radhe"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    

}
// console.log(username);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log(addOne(6));   // calling function , before declaration => not giving any err here.

function addOne(num){
     return num + 1

}



// addTwo(7);     // calling function , before declaration of function => here occures error. why ?  
const addTwo = function(num){      //here , function declared and hold in a variable. 
    return num + 2

}

