const obj={
    firstName:"Nilesh",
    age:22,
};
console.log(obj.test);
console.log(obj?.test);
console.log(obj.test+10);
console.log(obj?.test+10);

const num=obj.test && "Nilesh";
const num1=obj.test || "Nilesh";
console.log(num);
console.log(num1);

const data=[
    {
        id:"1",
        item:[],
    },
    {
        id:"2",
    },
    {
        id:"3",
        item:[10,20,30],
    }

];
//? null collision operator
//filter out item with zero elemet in item
//const newdata=data.filter((ele)=>ele.item.length==0); //error getting
//const newdata=data.filter((ele)=>ele?.item?.length==0);
//const newdata=data && data.filter((ele)=>ele?.item?.length==0);
//const newdata=data.length>0 && data.filter((ele)=>ele?.item?.length==0);
const newdata=data.length>0 ? data.filter((ele)=>ele?.item?.length==0) : [];
console.log(newdata);
