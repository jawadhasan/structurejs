export class Vehicle{

    constructor(id, name){
        this.id = id;
        this.name=name;
    }
    start(){
        throw 'Please override start in the Vehicle';
    }
}