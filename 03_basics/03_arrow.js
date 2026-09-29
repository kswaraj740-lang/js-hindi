const user = {
    username : "swaraj",
    price : 999 ,

    welcomemessage : function (){
       // console.log(`${this.username = this.username} ,welcome to the website `);
        
    }
}

   // user.welcomemessage()
   // user.username = "sam"
    //user.welcomemessage()


//function chai (){
   // let username = "swaraj"
    //console.log(this);
    //function ke andr this kaam nhi krta
    

//chai()

// const chai = function (){
//     let username = "swaraj"
//     console.log(this.username);
    
// }
// chai()

// arrow function 

const chai = () => {
    let username = "swaeaj"
    console.log(this);
    
}
//chai()



// const addtwo = (num1 , num2)=>{
//     return num1 + num2
// }
// console.log(addtwo(3,4));

const addtwo = (num1, num2) => (num1 + num2)

// ++++++++++++++++++++++++++++++++Notes ++++
// ===================== THIS & ARROW FUNCTION =====================


// 1. `this`
// `this` refers to the current execution context.
// Its value depends on HOW the function is called.


// 2. `this` IN OBJECT

// const user = {
//     username: "swaraj",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to the website`);
//     }
// };

// user.welcomeMessage(); // swaraj

// user.username = "sam";

// user.welcomeMessage(); // sam

// Here `this` = user
// Because user is calling the function.


// 3. `this` IN NORMAL FUNCTION

// function chai() {
//     console.log(this);
// }

// chai();

// When a normal function is called alone:
// `this` = undefined in strict mode / ES modules.

// Normal function HAS its own `this`.
// But its value depends on how it is called.


// Example:

// const user2 = {
//     username: "swaraj",

//     chai: function () {
//         console.log(this.username);
//     }
// };

// user2.chai(); // swaraj

// Here `this` = user2
// Because user2 called the function.


// IMPORTANT:
// Normal function does NOT mean `this` is always undefined.
// `this` depends on the calling method.


// 4. `this` IN ARROW FUNCTION

// const chai2 = () => {
//     console.log(this);
// };

// Arrow function does NOT have its own `this`.
// It takes `this` from its surrounding/outer scope.

// In many top-level strict/module situations:
// this = undefined


// DON'T SAY:
// "Arrow function always gives undefined."

// CORRECT:
// "Arrow function does not have its own `this`.
//  It takes `this` from the outer scope."


// ===================== ARROW FUNCTION =====================

// Normal function:

// const addtwo = function (num1, num2) {
//     return num1 + num2;
// };


// Arrow function:

//const addtwo = (num1, num2) => {
    //return num1 + num2;
//};


// IMPLICIT RETURN
// If there is only one expression,
// we can remove `{}` and `return`.

//const addtwo = (num1, num2) => (num1 + num2);


// Same:

// const addtwo = (num1, num2) => num1 + num2;


// ===================== QUICK REVISION =====================

// Normal Function:
// -> Has its own `this`
// -> `this` depends on how it is called
// -> chai() -> undefined in strict mode
// -> user.chai() -> this = user

// Arrow Function:
// -> Does NOT have its own `this`
// -> Takes `this` from outer scope

// Object method:
// -> user.welcomeMessage()
// -> `this` refers to user

// Explicit Return:
// -> { return num1 + num2 }

// Implicit Return:
// -> (num1 + num2)