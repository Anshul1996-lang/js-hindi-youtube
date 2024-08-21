const accountId = 144553
let accountEmail = "anshul@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ac@ac.com"
accountPassword = "2121212"
accountCity = "Delhi"

/*
  Prefer Do not user var 
  besause of issue in block scope and functional scope
*/
console.table({accountId, accountEmail, accountPassword, accountCity, accountState})