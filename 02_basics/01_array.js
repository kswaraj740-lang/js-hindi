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






