import {Car} from '../model/car.js';
import {Truck} from '../model/truck.js';

export class VehicleDataService{

    constructor(){
        this.cars=[];
        this.trucks=[];
    }

    loadData(vehicleData){
        for(let data of vehicleData) {
            switch(data.type){
                
                case 'car':
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;

                case 'truck':
                    let truck = this.loadTruck(data);
                    this.trucks.push(truck);
                    break;
            }
        }
    }

    loadCar(data){
        let car = new Car(data.id, data.name, data.make);
        return car;
    }

    loadTruck(data){
        let truck = new Truck(data.id, data.name, data.storageArea);
        return truck;
    }

}