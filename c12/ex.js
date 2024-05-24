//Conditional ternary operators
let isHungry = false;
let snack = isHungry ? "water" : "pizza";
console.log(`you should have some ${snack} `);
let player1 = "Hamza";
let player2 = "Hamzi";
if (player1 === player2) {
    console.log("first try is great");
}
else if ((player1 === "Hamza" && player2 === "Hamzi") || (player1 === "rock" && player2 === "hamzi") || (player1 === "hamzaaaew" && player2 === "ahzi")) {
    console.log("second expression is right");
}
else {
    console.log("you are wrong");
}
export {};
