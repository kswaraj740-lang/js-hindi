const accountId = 144553
let accountEmail = "kswaraj740@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2    //not allowed 
accountEmail = "hch@.com"
accountPassword = "23124134"
accountCity = "pune"
console.log(accountId)

/* prefer not to use var beacuse of issue in block scope
AND function scope 

*/

console.table([accountId , accountEmail , accountPassword , accountCity, accountState])
