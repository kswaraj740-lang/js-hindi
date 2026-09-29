//const tinderuser = new Object() //singleton object

const tinderuser = {}
tinderuser.id = "123abcd"
tinderuser.name = "swaraj"
tinderuser.isLoggedin = false 

//console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "swaraj",
            lastname : "shraf"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3 : "a" ,
    4:"b"
}

const obj3 = {...obj1 , ...obj2}
console.log(obj3);


const users = [{
    id : 1,
    email : "swaraj@"
},
{
    id : 2,
    email : "SDKHB"
}
]

console.log(users[1].email);
console.log(tinderuser);
//we can also access the obejcts keys separately also 
console.log(Object.keys(tinderuser)); 
// we caan also access the objects values also 
console.log(Object.values(tinderuser));

/*
OBJECTS - SUMMARY NOTES

Object
→ Stores data in key-value pairs.
→ Keys are also called properties.
→ Objects can contain different data types.

Creating an Object
→ {} is the common way to create an object.
→ new Object() creates an object using the Object constructor.

Adding Properties
→ Properties can be added after creating the object using:
  object.key = value

Nested Object
→ An object can contain another object as a property.
→ Nested properties can be accessed using dot notation.

Object Spread (...)
→ Used to combine/copy properties from objects.
→ Example: {...obj1, ...obj2}
→ Creates a new object.

Array of Objects
→ An array can contain multiple objects.
→ Individual objects can be accessed using array index.
→ Their properties can then be accessed using dot notation.

Object.keys()
→ Returns an array containing all keys/property names.

Object.values()
→ Returns an array containing all values.

IMPORTANT

Object → key-value pairs
Nested Object → object inside another object
Spread (...) → combines/copies object properties
Object.keys() → returns keys as an array
Object.values() → returns values as an array
Array of Objects → multiple objects stored inside an array
*/


