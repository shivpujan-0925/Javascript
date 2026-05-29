const marvel_heros = [ "thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);    //give err

 const allHeros = marvel_heros.concat(dc_heros)    //concat method
//  console.log(allHeros);

//spread method
const all_newHeroes = [...dc_heros, ...marvel_heros];
// console.log(all_newHeroes);


const another_array = [1,2,3,[4,5,6], 7, [6,7,[1,2,3]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("radhe"));
// console.log(Array.from("radhe"));   //to convert into array formate     //array.from() check for .length then convert into array formate

console.log(Array.from({name:"radhe"}));  //interesting case    => gives O/P : [] , because plain objects dont have length.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







 


