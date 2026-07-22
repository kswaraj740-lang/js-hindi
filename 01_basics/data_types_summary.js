// # PRIMITIVE 
/*
Primitive data types are the basic built-in data types in JavaScript 
that store a single value directly.
 They are immutable, which means their values cannot be changed once created.


*/

// 7 types : String , Number , Boolean , null, undefined ,Symbol , BigInt
 
const id = Symbol('123')
const anotherid = Symbol('123') 
console.log(id === anotherid);//false , why ? Every call to Symbol() creates a new, unique symbol.


// # REFERENCE DATA TYPE 
/*  
Reference data types are data types that store the 
address (reference) of an object in memory instead 
of storing the actual value directly. Objects, arrays,
 and functions are all reference types in JavaScript.


javaScript is a dynamically typed language.
  This means you do not need to declare the 
  data type of a variable explicitly

 */

   //https://262.ecma-international.org/5.1/#sec-11.4.3