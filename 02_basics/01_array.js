//array

const myarr = [0,1,2,3,4,true,"swaraj"];
const myarr2 = new Array(1,4,5,6)
//console.log(myarr[0]);


//array methods

myarr.push(8); 
//console.log(myarr); 
myarr.pop();
//console.log(myarr);

//slice , splice 
console.log("A" , myarr);
const myarr1 = myarr.slice(1,3);
console.log(myarr1);
console.log("B" , myarr);


const myn2 = myarr.splice(1,3);

console.log(myn2);

console.log("C",myarr);



// ==================== ARRAY METHODS NOTES ====================
//
// push()
// → Adds element(s) at the end of the array.
// → Modifies the original array.
// → Returns the new length of the array.
//
// pop()
// → Removes the last element from the array.
// → Modifies the original array.
// → Returns the removed element.
//
// unshift()
// → Adds element(s) at the beginning of the array.
// → Modifies the original array.
// → Returns the new length of the array.
//
// shift()
// → Removes the first element from the array.
// → Modifies the original array.
// → Returns the removed element.
//
// includes()
// → Checks whether a particular element exists in the array.
// → Returns true or false.
//
// indexOf()
// → Returns the index of the first occurrence of an element.
// → Returns -1 if the element is not found.
//
// slice()
// → Returns a portion of an array.
// → End index is not included.
// → Does NOT modify the original array.
//
// splice()
// → Used to add, remove, or replace elements.
// → Modifies the original array.
// → Syntax: splice(start, deleteCount)
//
// join()
// → Converts array elements into a string.
// → A separator can be specified.
//
// reverse()
// → Reverses the order of elements.
// → Modifies the original array.
//
// sort()
// → Sorts the elements of an array.
// → Modifies the original array.
// → By default, values are sorted as strings.
// → For numbers, a comparison function is generally used.
//
// forEach()
// → Executes a function for each element.
// → Does NOT create a new array.
//
// map()
// → Executes a function for each element.
// → Creates and returns a new array.
//
// filter()
// → Selects elements based on a condition.
// → Creates and returns a new array.
//
// reduce()
// → Reduces all array elements to a single value.
// → Commonly used for sum, product, total, etc.
//
// ==========================================================
//
// slice()  → original array NOT changed
// splice() → original array IS changed
//
// forEach() → performs an operation on each element
// map()     → transforms elements and returns a new array
// filter()  → selects elements and returns a new array
// reduce()  → reduces elements to one final value
//
// ==========================================================


