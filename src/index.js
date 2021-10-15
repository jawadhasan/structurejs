
import "./import-jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import {NavBar} from './ui/nav-bar.js';

let navBar = new NavBar('Structure-JS-Code');

navBar.addLink('Home','home');
navBar.addLink('Vehicles','vehicles');
navBar.addLink('About','about');

navBar.appendToElement($('body'));