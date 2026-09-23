// can be denoted by both single or double qoutes 
const name = "swaraj"
const repoCount = 1


// console.log(name + repoCount + "value");   //outdated 

//use backtics 

console.log(`hello my name is swaraj ${name} and my repocount is ${repoCount}`);

//way of intiallizing a string 
const gamename = new String('swarjicc')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.toUpperCase());
console.log(gamename.charAt(3));

const str = gamename.substring(0,4);   // 4 is not included 
console.log(str);

const str1 = gamename.slice(-6,4);    // in slice -ve works 
console.log(str1);

const str2 = "   swaraj   " 
console.log(str2);
console.log(str2.trim());






