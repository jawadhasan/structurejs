export class BaseElement{

    constructor(){
        this.element = null; //jquery object        
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
    }
    createElement(){
        let s = this.getElementString();
        this.element = $(s); //wrap 
    }

    getElementString(){
        throw 'Please override getElementString() in BaseElement class';
    }

}