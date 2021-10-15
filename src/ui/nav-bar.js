import { BaseElement } from "./base-element";

export class NavBar extends BaseElement {

    constructor(title){
        super();

        this.title = title;
        this.links=[];
    }

    //override
    getElementString(){
        let links='';
        for(let link of this.links)
            links += `<li class="nav-item">
                        <a class="nav-link" href="${link.href}">${link.title}</a>
                     </li>
            `;

        return ` 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">${this.title}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${links}
          </ul>
        </div>
      </nav>
        `;
    }

    addLink(title, href){

        this.links.push({
            title,
            href
        });
    }
}