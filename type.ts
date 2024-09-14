let data: string = "hello world";

let obj:{
    name:string,
    age:number,
    isMarried:boolean,
}

let array:string[];


let arrObj:{
    name:string,
    age:number,
    isMarried:boolean,
}[];

obj = {
    name:"John",
    age:66,
    isMarried:false,
    // language:"yoruba",
}
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
let union:string | number | boolean;
union = 44;

let upper:Array<string> = ["HELLO WORLD",];
const add = (a:number[],b:number)=>{ 
    const d = [b,...a]
    return d;
}
const arr = [1,2,3,4,5];
let comb = add(arr,3)