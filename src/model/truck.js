import {Vehicle} from './vehicle.js';

export class Truck extends Vehicle{

    constructor(id, name, storageArea ){
        super(id,name); 
        this.storageArea = storageArea;      
    }

    start(){
        console.log(`Truck ${this.id} has started.`)
    }
}