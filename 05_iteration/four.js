const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"

}

for (const key in myObject) {
//   console.log(`${key} shortcut for ${myObject[key]}`);

}

const programming = ["js", "rb", "cpp", "java", "swift"]
for (const key in programming) {
   
    // console.log(programming[key]);
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {       //NOT iterable

    console.log(map);
    

}

