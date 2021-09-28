
import ajaxCall from './ajaxService.js'

const getUsersUrl = 'https://reqres.in/api/users?page=2';
const createUserUrl = 'https://reqres.in/api/users';

function getUsers() {
    //return a promise
    return ajaxCall('GET', getUsersUrl, null)
}

function createUser (userObject) {
    return ajaxCall('POST', createUserUrl, userObject);
}

export {getUsers as getUsersList, createUser};
