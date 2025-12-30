const accountId = 17689
let accountEmail = "radhe@google.com"
var accountPassword = "2529"
accountCity = "patna"

// accountId = 25  //not allowed
accountEmail = "shiv@gmail.com"
accountPassword = "202020"
accountCity = "delhi"
let accountState;

/*
prefer not to use var
because of issue in block scope and functional scope.

*/

// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);




