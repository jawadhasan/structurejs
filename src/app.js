import makeAjaxRequest from "./services/ajaxService.js";
import {VehicleDataService} from "./services/vehicle-data-service.js";

let vehicleDataService = new VehicleDataService();


 makeAjaxRequest('GET','./data/vehicles.json', null)
                    .done(function(data){
                        vehicleDataService.loadData(data);
                    }).fail(function(e){
                        console.log(e);
                    });



//Testing
function displayOutput(){
    for(let car of vehicleDataService.cars)
        console.log(car.name);
}
setTimeout(displayOutput,100);
