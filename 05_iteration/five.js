const coding = ["js", "ruby", "cpp", "python", "java"]

// coding.forEach( function (item){
//    console.log(item);
   
// })


// coding.forEach( (val)=>{
//    console.log(val);
   
// })


// function printMe(item){
//   console.log(item);
  
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        LanguageName: "Javascript",
        LanguageFileName: "js"
    },
    {
        LanguageName: "Java",
        LanguageFileName: "java"
    },
    {
        LanguageName: "Python",
        LanguageFileName: "py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.LanguageName);
    
})