const reversenumber=(num)=>{
    const numarray=String(num).split("");
    return Number(numarray.reverse().join(""));

}
console.log(reversenumber(123));

//polyfill
//prototype

// const arr=[1,2,3];
// console.log(arr.length);
// console.log(arr.reverse());
const arr=new Array();
console.log(arr);
class Darray{
    myarray;
    constructor(arr=[]){
        this.myarray=arr;
    }
    reverse(){
        let start=0, end=this.myarray.length-1;
        for(;start<end;start++,end--){
          const temp=this.myarray[start];
          this.myarray[start]=this.myarray[end];
          this.myarray[end]=temp;
    }
    
    }
    printarray()
    {
        console.log(this.myarray);
    }
}

const arr1=new Darray([1,2,3]);
arr1.reverse();
arr1.printarray();


// const output=[];
// const myarray=[1,2,3,4];
// for(let i=myarray.length-1;i>=0;i--)
// {
//     output.push(myarray[i]);
// }
// console.log(output);

// let start=0, end=myarray.length-1;
// for(;start<end;start++,end--){
//       const temp=myarray[start];
//       myarray[start]=myarray[end];
//       myarray[end]=temp;
// }
// console.log(myarray);

const myarray=[1,2,3,4];
if(myarray.reverse())
{
    console.log(myarray)
}




// add a method in array prototype by the nae of printDoubtClassMentorName
const arr2=[1,2,3];
Array.prototype.printDoubtClassMentorName=()=>{
    console.log("NSS")
}
console.log(arr2.printDoubtClassMentorName());
if(!Array.reverse){
    Array.prototype.reverse=()=>{

    }
}