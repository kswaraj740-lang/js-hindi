//for of 

const arr = [1,2,3,4,5]
for (const num  of arr) {
    //console.log(num);
}

const str = "hello world"
for (const element of str) {
   // console.log(element);
    
}

//maps 

const map = new Map()    //MAP(key , value)
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')
map.set('IN' , 'BHARAT')   //doesnt store duplicates 
console.log(map);



for (const [key,value] of map) {
    console.log(key, ':-' ,value);
    
}


// const myobj = {
//     'game1': "NFS",
//     'game2' : "SPYDERMan"
// }
// for (const [key , value] of myobj) {
//   //  console.log(key , ":-,",value);   // objects are not iteratable 
    
//}





```js
// ======================
// 1. for...of LOOP
// ======================

// for...of is used to get VALUES one by one
// from an iterable like Array, String, Map, Set, etc.

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
// 1
// 2
// 3
// 4
// 5


// ======================
// for...of with STRING
// ======================

const str = "hello world"

for (const element of str) {
    console.log(element);
}

// It gives each character one by one:
// h
// e
// l
// l
// o
// space
// w
// o
// r
// l
// d



// ======================
// 2. MAP
// ======================

// Map stores data in KEY : VALUE pairs

const map = new Map()

map.set('IN', 'INDIA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('FR', 'FRANCE')

// Same KEY again
map.set('IN', 'INDIA')

// Map does NOT store duplicate KEYS
// If the same key is added again,
// its value gets updated/replaced.

console.log(map);


// ======================
// for...of with MAP
// ======================

// Map gives us [key, value] together

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// IN :- INDIA
// USA :- UNITED STATES OF AMERICA
// FR :- FRANCE


// [key, value] is called ARRAY DESTRUCTURING
// It separates the pair into two variables:
// key
// value



// ======================
// 3. for...of with OBJECT
// ======================

const myobj = {

    game1: "NFS",
    game2: "SPYDERMan"

}

// This will NOT work:
//
// for (const [key, value] of myobj) {
//     console.log(key, ":-", value);
// }

// Why?
// Normal JavaScript Objects are NOT iterable by default.
// Therefore, for...of cannot directly be used on objects.


// For objects, we generally use:
// Object.keys()
// Object.values()
// Object.entries()
```
