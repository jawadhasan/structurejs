import {displaySite, displayTitle} from './siteInfo.js'
import {getUsersList, createUser} from './dataService.js'



function displaySiteInfo(){
    displayTitle();
    displaySite();
}

function getUsers() {

   getUsersList()
        .done(function (data) {
            console.log(data);

        }).fail(function (e) {
            console.log('error', e);
        });
}

function createAppUser(userObj) {

    createUser(userObj)
        .done(function (data) {
            console.log(data);

        }).fail(function (e) {
            console.log('error', e);
        });
}


export { displaySiteInfo, getUsers, createAppUser }