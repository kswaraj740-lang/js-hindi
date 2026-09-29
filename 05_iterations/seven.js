const nu = [1,2,3,4,5,6,7,8,9,10];
const newnums = nu.forEach((item)=>(item + 1))
//console.log(newnums); //undefined as for each doesnt return any value 
const newnums1 = nu.filter((num)=>(num + 10))
//filter() is used to select elements, not modify them.
//console.log(newnums1); // same value

//we use map to return the modified elements 
//const mynums2 = nu.map((item)=>(item + 10))
//console.log(mynums2);

//chaining 
const newNums = nu.map((num)=>(num*10)).map((num)=>(num+1)).filter((num)=>(num > 50))
console.log(newNums);



