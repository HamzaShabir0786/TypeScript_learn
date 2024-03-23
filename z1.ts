//simple function
function f1(){
    console.log("Hii how are you dear hamza")
}

f1()

//function argument by pass value
function mul(m1:number, m2:number){
     var m3 = m1 + m2
    console.log(m3)
    if (m3>22){
        console.log("congratulation m3 is grater than 22")
    }
    else{
        console.log("sorry dear m3 is less than 22")
    }
}
mul(4,3)
mul(2.2, 6.3)


//return function
function ret(r1:number, r2:number){
return  r1 *r2;
}
let log = ret(3,6);
console.log(log)

function today(t1:number, t2:number){
    return t1 * t2;
}
let logo =today(55,2)
console.log(logo)


function zsoft(z1s:string,z2s:string){
    return z1s +  z2s;
}
let xsoft = zsoft("My name is " , "Hamza") 
console.log(xsoft)

//Local local variable exist and create with let or var only in function remember if you creae varibale without var or let in function is called global variable.


//Function Expression
var express = function (hu:number ,yu:number){
    return hu+ yu;

};
var yy = express(7,3);
console.log("function expressin here "+yy );


//Function Hoisting

var f9 = sum(3,9);
console.log("funtion hoisting here "+ f9)

function sum(sum1:number, sum2:number){
 return sum1 * sum2;
}