import { BaseElement } from "./base-element";

export class Button extends BaseElement {

    constructor(title){
        super();

        this.title = title;
    }

    //override
    getElementString(){
        return ` 
        <button type="button" class="btn btn-primary">
        ${this.title}
        </button>        
        `;
    }
}