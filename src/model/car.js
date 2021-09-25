
export class Vehicle{

    constructor(id, name){
        this.id = id;
        this.name=name;
    }
    start(){
        throw 'Please override start in the Vehicle';
    }
}

export class Car extends Vehicle{

    constructor(id, name, make ){
        super(id,name);  
        this.make = make;     
    }
    start(){
        console.log(`Car ${this.id} has started.`)
    }
}

export class Truck extends Vehicle{

    constructor(id, name, storageArea ){
        super(id,name); 
        this.storageArea = storageArea;      
    }

    start(){
        console.log(`Truck ${this.id} has started.`)
    }
}