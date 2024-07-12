// type CarType = {
//     brand:string;
//     model:string;
//     year:number;
// };
;
class Car {
    brand = 'toyota';
    model = 'corolla';
    year = 2024;
    displayDetails() {
        return ` brand ${this.brand}
        moder: ${this.model} 
        year: ${this.year}
        Hello I am here `;
    }
}
class Car2 {
    brand = 'toyota';
    model = 'corolla';
    year = 2024;
    displayDetails() {
        return ` brand ${this.brand}
        moder: ${this.model} 
        year: ${this.year}
        Hello I am here `;
    }
}
const netCar = new Car2();
console.log(netCar.year()); //here you can see error due to privatization.
const myCar = new Car();
console.log(myCar.displayDetails());
export {};
// console.log(typeof(myCar))
// function displayDetails(){
//     return `brand: ${myCar.brand}
//             Model: ${myCar.model} 
//             year: ${myCar.year}`
// }
// let cosdisplay = displayDetails()
// console.log(cosdisplay);
