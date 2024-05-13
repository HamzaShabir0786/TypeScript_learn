// what did learn in class 11 ? 
//object//
//nested object//
//strong type object//  
const myProperties = {
    nam: "hamza",
    age: 20,
    rollNo: 10298,
    address: 'Earth',
    nested: {
        lahore: "city",
        nestedObject: "it's a vlue of nesteb object"
    },
    isOutFromNestedObject: true
};
const userPromt = 'nam';
console.log(myProperties[userPromt]);
// console.log(myProperties.userPromt); //output become an error//
console.log(myProperties.nested.nestedObject);
export {};
