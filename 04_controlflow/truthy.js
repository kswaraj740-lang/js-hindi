const useremail = []
if(useremail){
    console.log("got the mail");
    

}
else{
    console.log(" dont have the mail ");
    
}


// falsy values 
//false , 0,-0,BigInt ,0n, "",null,undefined ,NaN
//trutyh values 
// "0" ,'false'," " ,[] ,{} , function(){}

// nullish coalescing operator (??) : null defined 
let val1;
val1 = 5 ?? 10 ; // op = 5
let val2;
val2 = null ?? 10 ; //op = 10
console.log(val2);
// terniary operator 
// condition ? true : false 

const iceteaprice = 100;
iceteaprice >= 80 ? console.log("less than 80 ") : console.log("more than 80")