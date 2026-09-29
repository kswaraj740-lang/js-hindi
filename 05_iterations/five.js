const coding = ['js','ruby','java','python'];

//coding.forEach(function (item){
    //console.log(item);
    
//})

// coding.forEach( (item) =>{
//     console.log(item);
    
// })

// function preintme(item){
//     console.log(item);
    
// }
// coding.forEach(preintme)  //give only reference 

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
    
})


//iterations over objects in an array 

const mycoding = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },

    {
        languagename : "java",
        languagefilename :"java"
    },
    {
        languagename : "python",
        languagefilename : "py"
    }

]


mycoding.forEach((item) => {
    console.log(item.languagename);
    
})

