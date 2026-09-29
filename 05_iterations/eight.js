const mynums =[1,2,3,4];
// //const mytotal = mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval : ${currval}`);
    
//     return acc + currval;
// },0)
// console.log(mytotal);


// using arrow function as callback function 
const mytotal = mynums.reduce((acc,curr)=>(acc + curr),0)
console.log(mytotal);

const shoppingcart = [
    {
        itemname:"js course",
        price :999
    },
    {
        itemname:"data scientist",
        price: 9000
    },
    {
        itemname:"ai",
        price:8000
    }
];
const totalprice = shoppingcart.reduce((acc,item)=>(acc + item.price),0)
console.log(totalprice);

//using for of 
let totalprice1 = 0;
for (const element of shoppingcart) {
    totalprice1 = totalprice1 + element.price;
}
console.log(totalprice1);
