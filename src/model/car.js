import {Vehicle} from './vehicle.js';

export class Car extends Vehicle{

    constructor(id, name, make ){
        super(id,name);  
        this.make = make;     
    }
    start(){
        console.log(`Car ${this.id} has started.`)
    }
}

