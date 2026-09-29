// // if 
// const temp = 56

// if(temp < 50 ){
//     console.log("less than 50");
// }
// else{
//     console.log("temperture greater  than 50");
// }


// const balance = 1000;
// if(balance < 500)
// {
//     console.log("less than 500");
    
// }
// else if ( balance < 750){
//     console.log("less than 750 ");
    
// }
// else{
//     console.log("dkjmfow");
    
//}


const userlogedin = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

if(userlogedin && debitcard){
    console.log("allowed to buy courses");
    
}
if(loggedinfromemail || loggedinfromgoogle){
    console.log("user logged in");
    
}