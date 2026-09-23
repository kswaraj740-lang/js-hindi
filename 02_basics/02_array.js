const marvel_heros = ["thor","ironman" , "spiderman"]
const dc_heros = ["superman", "flash" , "batman"]

const all_new_heros = marvel_heros.concat(dc_heros)
//console.log(all_new_heros);

//other way 

const allheros = [...marvel_heros, ...dc_heros]
//console.log(allheros);



const another_array = [1,2,3,[4,5,6],7,[8,9,[34,56]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



/*
ARRAY CONCATENATION & OTHER METHODS

concat()
→ Combines two or more arrays.
→ Returns a new array.
→ Does NOT modify the original arrays.

SPREAD OPERATOR (...)
→ Used to combine/copy array elements.
→ Creates a new array.
→ Example: [...array1, ...array2]

push(array)
→ Adds the complete array as ONE element.
→ Creates a nested array.

flat()
→ Flattens nested arrays into a single array.
→ flat(depth) specifies how many levels to flatten.
→ flat(Infinity) flattens all nested levels.

Array.isArray()
→ Checks whether a value is an array.
→ Returns true or false.

Array.from()
→ Creates a new array from an iterable or array-like value.
→ Commonly used to convert strings into arrays.
→ Array.from({}) does not create an array because a normal object
  is not iterable/array-like in the required way.

Array.of()
→ Creates a new array from the given values.
→ All provided values become elements of the new array.

IMPORTANT:
push()              → modifies original array
concat()            → returns new array
... (spread)        → spreads elements into a new array
flat()              → removes nested array levels
Array.isArray()     → checks if value is an array
Array.from()        → converts iterable/array-like value to array
Array.of()          → creates array from given values
*/
