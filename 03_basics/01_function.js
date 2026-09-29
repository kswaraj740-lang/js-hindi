function saymyname(){
console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}


//saymyname() 


// function addthreenumbers(number1 , number2,number3){
//     console.log(number1 + number2 + number3);
    
// }

function addthreenumbers(number1 , number2, number3){
   // let result = number1 + number2 + number3
   // return result

   return number1 + number2 + number3;
}


const result = addthreenumbers(3,4,"3")
//console.log("result : " , result );

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return 
        
    }
    return `${username} just logged in`   //only returned not printed 
}
console.log(loginUserMessage("swaraj"))



function calculatecartPrice(val1,val2 ,...num1){
    return num1
}
console.log(calculatecartPrice(2,400,500,2000))


const user ={
    username : "swaraj",
    price : 199
}
function handleobject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

             

 




















