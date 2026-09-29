// const coding = ['js','python','java','rubby'];
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
    
// })
// console.log(values); //undefined 
// for each doesnt return any value ,so we can use filter()

const mynumbers = [1,2,3,4,5,6,7,8,9,10];
const newnums = mynumbers.filter((num) => (num > 4) )
// jab scope use krte hai tab return likhna hoga otherwise simple open bracket me nhi 
//console.log(newnums);



const books = [
    {
    title : "book one", genre: "science" ,publish :2000
},
{
    title : "book two", genre: "non-friction",publish:2001
},
{
    title:"book three" , genre:"history" , publish:2001
},
{
    title:"book four", genre:"friction",publish:2002
}
];

const mybooks = books.filter((item) => (item.genre == "history"))
console.log(mybooks);



