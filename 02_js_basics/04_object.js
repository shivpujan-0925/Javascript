// const tinderUser = new Object()   //singelton object
const  tinderUser = {}

tinderUser.id = "123xyz"
tinderUser.name = "jon snow"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"radhe@gmail.com",
    fullname:{
        username:{
            firstname:"shivpujan",
            lastname:"kumar"
        }
    }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const Users = [
    {
        id:"1",
        email:"r@gmail.com",
        username:"radhe"
    },
     {
        id:"1",
        email:"r@gmail.com",
        username:"radhe"
    },
     {
        id:"1",
        email:"r@gmail.com",
        username:"radhe"
    },
     {
        id:"1",
        email:"r@gmail.com",
        username:"radhe"
    }
]

// console.log(Users[1].username);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   //array type
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName :"JavaScript",
    price:"999",
    courseInstructor:"Hitesh"

}

// course.courseInstructor


//De-structuring

const {courseInstructor} = course
//OR

const {courseInstructor:instructor} = course
// console.log(courseInstructor);
console.log(instructor);



//API FORMATE: JSON

//    {
//         "id":"1",
//         "email":"r@gmail.com",
//         "username":"radhe25s"
//     }

// [
//     {},
//     {}
// ]

