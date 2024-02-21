//count the occurance of each alphabet

const myString="abbccddda";

// myString.map((ele)=>{
//     let count=0;
//     for(let i=0;i<myString.length;i++)
//     {
//         if(ele===myString[i])
//         count++;
//     }
//     retrun ([ele,count]);
// })
const obj={};
for(const char of myString){
    if(obj[char]){
        obj[char]=obj[char]+1;
    }
    else{
        obj[char]=1;
    }
}
console.log(obj);