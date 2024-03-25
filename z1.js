<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
=======
>>>>>>> e0c6d5e2351e4327cf59924d39695063ae9ce106
//simple function
function f1() {
    console.log("Hii how are you dear hamza");
}
f1();
//function argument by pass value
function mul(m1, m2) {
    var m3 = m1 + m2;
    console.log(m3);
    if (m3 > 22) {
        console.log("congratulation m3 is grater than 22");
    }
    else {
        console.log("sorry dear m3 is less than 22");
    }
}
mul(4, 3);
mul(2.2, 6.3);
//return function
function ret(r1, r2) {
    return r1 * r2;
}
var log = ret(3, 6);
console.log(log);
function today(t1, t2) {
    return t1 * t2;
}
var logo = today(55, 2);
console.log(logo);
function zsoft(z1s, z2s) {
    return z1s + z2s;
}
var xsoft = zsoft("My name is ", "Hamza");
console.log(xsoft);
//Local local variable exist and create with let or var only in function remember if you creae varibale without var or let in function is called global variable.
//Function Expression
var express = function (hu, yu) {
    return hu + yu;
};
var yy = express(7, 3);
console.log("function expressin here " + yy);
//Function Hoisting
var f9 = sum(3, 9);
console.log("funtion hoisting here " + f9);
function sum(sum1, sum2) {
    return sum1 * sum2;
}
// //Recursive function
// function facotorial(n:any){
//     if(n<1){
//         return 1;
//     }
//     else{
//         return n * facotorial(n-1)
//     }
// }
// console.log(facotorial(6));
