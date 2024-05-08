// Arrays are containers: They hold multiple plieces of data.
//ordered collection:     Items in an arraus have a specific order.
//Flexible data:          Arrays can hold multiple type of data like numbers , string etc.
//INdexed Elements:       Each item in an array has an index number starting from 0.
//Dynamic sizw:           Arrays can grow or shrink in size as needed.
let City = ["Karachi", "Hyderabad", "Lahore", "Islamabad"];
City.push("Gujranwala"); // add in the last 
console.log(City);
let a = City.pop(); //del from last but it's return in a variabel
console.log(a);
console.log(City);
City.splice(0, 1); //0 is positioin and 1 is the number of delete item
console.log(City);
City.unshift("first unshift"); // it's a add in zero index
console.log(City);
City.shift(); //remove from zero index
console.log(City);
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3); //it's a make shallow copy 1 start and 3-1 . remember original arrays not effeceted.
console.log(fruits);
console.log(citrus);
console.log(fruits);
export {};
