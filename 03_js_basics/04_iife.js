//Immediately Invoked Function Expressions -IIFE => Use to remove pollution due to global scope


(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`);
    
})();        // semicolone required here to stop the execution of IIFE 


( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
    
})("System")
