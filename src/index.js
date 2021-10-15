
import "./import-jquery.js";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import {Button} from './ui/button.js';
import {Image} from './ui/image.js';

let b = new Button('New Button!');
b.appendToElement($('body')); //wrap it as jQuery object


$(function () {
    console.log('ready function');
 
});