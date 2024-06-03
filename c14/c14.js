// console.log("First");
// for(let i = 1; i <= 10; i++){
//     console.log('Loop');
// }
// console.log('second');
// console.log('third');
// Arrow Functions
// let xd =(num:number, num2:number) => console.log(num+num2)
// xd(2,4)    
//callback function
//It's a Synchronous behaviour
function greething(askName) {
    console.log('Hello, Greet!');
}
function askName() {
    console.log('Enter YOur name');
}
greething(askName);
console.log(askName);
askName();
export {};
