//Array

// const myArr = [0,1,2,3,4,5,true, "radhe"]
const myArr = [0,1,2,3,4,5]
const Heros = ["jon snow", "arya stark"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[2]);

// Array Methods

// myArr.push(6)
// myArr.push(7)       
// myArr.pop()     //remove last element

// myArr.unshift(6)    //element added from starting position starting. 
myArr.shift()      //remove element from start

// console.log(myArr);
// console.log(myArr.includes(3));   //to check elements exist in array or NOT
// console.log(myArr.indexOf(4));   //to check position of elements


const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);


//SLICE, SLPLICE

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)  //slice => copy the elements from orignal array of given range but not the right side range POSITION.
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)   // splice => Delete all elements from original array of given range.
console.log("C ", myArr);
console.log(myn2);














