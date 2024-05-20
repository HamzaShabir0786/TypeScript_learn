let Icecream = "Strawberry";
//
//
//Fresh Object
//Stale Object
let ball = {
    diameter: 10,
};
let sphere = {
    diameter: 20,
};
let tube = {
    diameter: 30,
    length: 35,
};
// ball = sphere
// sphere = ball
// console.log(ball)
// console.log(sphere)
ball = tube;
export {};
