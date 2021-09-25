import { Car, Truck } from "./model/car.js";


let car1 = new Car('A123', 'Test Car1', 'Tesla');
console.log(`${car1.id} : ${car1.name}`);
car1.start();

let truck1 = new Truck('B444', 'Test Truck1',4);
console.log(`${truck1.id} : ${truck1.name}: ${truck1.storageArea}`);
truck1.start();