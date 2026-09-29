// immediately  invoked function expressisons
//IIFE means a function that is created and executed immediately

// why to use IIFE ? 
// 1> executes a functon immediately 
// 2> avoid polluting the global scope 
//3> create a private scope for the variables 
(function chai(num1 , num2){
    console.log(num1 + num2 ) 
    
})(5,10);


//arrow function with paramweters in iife 
((name) => {
    console.log("db connected 2 ");
    
})("swaraj")