for (let i = 0; i< 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
        
    }
    //console.log(element);
    
}
//element is not accesible outside 
for (let index = 0; index <= 10; index++) {
   // console.log(`outer loop value : ${index}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop value ${j}`);
        //console.log(index + '*' + j + '=' + index*j);
        
        
    }
    
}
let myarray = [ "flash", "batman","superman"];
for(let i = 0; i<myarray.length;i++){
    const element = myarray[i];
    //console.log(element);
    
}


// break and continue 
// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log('detected 5 ');
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
    
// }


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log('detected 5 ');
        continue
    }
    console.log(`value of i is ${index}`);
}

