//A synchronous Programming/behaviour.
console.log('First');
setTimeout(() => {
    console.log("second ");
}, 3000); //3000 is a milisecond
console.log('Third');
setTimeout(() => {
    console.log("forth ");
}, 6000);
setTimeout(() => {
    console.log("forth ");
}, 1000);
export {};
