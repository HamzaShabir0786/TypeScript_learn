//type Allias

type IStudentInformation = {
    name:string,
    age:number,
    cnic:number
}   

let obj:IStudentInformation =  {
    name:"ahmfza",
    age:12,
    cnic:12452

}
console.log(obj)
console.log(typeof(obj))

/// Union type
type varType = string|number|boolean;
let num:varType = 1234;
let chr:varType = "hlw";
let IsTrue:varType = true;
console.log("it's a last Console "+ typeof(chr),(num),(IsTrue));

//////////////////////////////////////////////////////////////////////////
///Intersetion type//////
type firstType = {
    Edu:string,
    Experience:string,
    Lahore:string
};
type secondType = {
    Lahore:string,
    rollNO: number
};

type IntersectedType = firstType & secondType; //typeilias with intersection type

let first:firstType & secondType = { //it's a intersection
    Edu:"still continue",
    Experience:"one year",
    rollNO:2345,
    Lahore:"city"
}

let second:IntersectedType= { //it's a intersection
    Edu:"still continue",
    Experience:"one year",
    rollNO:2345,
    Lahore:"city"
}