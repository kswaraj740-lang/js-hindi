// ==================== SCOPE ====================

// Scope = the area where a variable can be accessed.

// let and const are BLOCK SCOPED.
// They can be accessed only inside the { } block where they are declared.

// var is FUNCTION SCOPED.
// It ignores normal if/for blocks and is available throughout the function.

// Example:

let a = 300;

if (true) {
    let a = 10;       // Different 'a', only inside this block
    const b = 20;     // Only inside this block
    var c = 30;       // var is NOT block scoped

    console.log("inner value of a : ", a); // 10
}

console.log(a); // 300

// console.log(b); // ERROR → b is block scoped

console.log(c); // 30 → var is function scoped


// ==================== IMPORTANT ====================

// let   → Block Scope
// const → Block Scope
// var   → Function Scope


// ==================== NESTED FUNCTION / SCOPE CHAIN ====================

// A function inside another function is called a nested function.

// Inner function can access variables of its outer function.
// Outer function CANNOT directly access variables of inner function.

// This is called the SCOPE CHAIN.

// JavaScript first searches for a variable in the current scope.
// If not found → searches outer scope → then further outer scope.

// Example:

function one() {

    const username = "swaraj";

    function two() {

        const website = "utube";

        console.log(username);
        // username is not inside two()
        // So JavaScript searches the outer function one()
        // and finds username there.
    }

    // console.log(website);
    // ERROR → website belongs to two()'s scope.

    two();
}

one();


// ==================== SIMPLE RULE ====================

// Inner scope → CAN access outer scope
// Outer scope → CANNOT access inner scope


// ==================== FUNCTION DECLARATION ====================

// Normal way of creating a function.

// Function declarations are HOISTED.
// Therefore, we can call the function before its declaration.

console.log(addone(5)); // 6

function addone(num) {
    return num + 1;
}

// Hoisting:
// JavaScript knows about the function declaration before executing the code.


// ==================== FUNCTION EXPRESSION ====================

// Function can also be stored inside a variable.

// This is called a FUNCTION EXPRESSION.

const addtwo = function(num) {
    return num + 2;
};

console.log(addtwo(5)); // 7


// IMPORTANT:
// Function expression with let/const cannot be used
// before the variable is initialized.

// Example:

// console.log(addtwo(5)); // ERROR

// const addtwo = function(num) {
//     return num + 2;
// };


// ==================== FUNCTION DECLARATION vs EXPRESSION ====================

// Function Declaration:
// function addone() {}
// → Hoisted
// → Can call before declaration

// Function Expression:
// const addtwo = function() {}
// → Stored inside a variable
// → Cannot use before initialization


// ==================== QUICK REVISION ====================

// let     → Block Scope
// const   → Block Scope
// var     → Function Scope

// Inner function → Can access outer variables
// Outer function → Cannot access inner variables

// Function Declaration → Hoisted
// Function Expression → Cannot be used before initialization

// Scope Chain → Current scope → Outer scope → Global scope