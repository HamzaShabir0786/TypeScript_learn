// type CarType = {
//     brand:string;
//     model:string;
//     year:number;
// };

interface CarTypes  { //interface especially create for class by the we can use type but interface best practice.//vbbvbv
    brand:string;
    model:string;
    year:number;
};
class Car implements CarTypes {
    public brand:string = 'toyota';
    public model:string = 'corolla';
    public year:number = 2024;
    displayDetails(){
        return ` brand ${this.brand}
        moder: ${this.model} 
        year: ${this.year}
        Hello I am here `
    }
   
}

class Car2  {
    public brand:string = 'toyota';
    public model:string = 'corolla';
    private year:number = 2024;
    displayDetails(){
        return ` brand ${this.brand}
        moder: ${this.model} 
        year: ${this.year}
        Hello I am here `
    }
   
}
const netCar = new Car2()
console.log(netCar.year()) //here you can see error due to privatization.



const myCar =  new Car()
console.log(myCar.displayDetails())
// console.log(typeof(myCar))

// function displayDetails(){
//     return `brand: ${myCar.brand}
//             Model: ${myCar.model} 
//             year: ${myCar.year}`


// }
// let cosdisplay = displayDetails()
// console.log(cosdisplay);
 