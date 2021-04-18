var dataService = function () {

    let getUsersUrl = 'https://reqres.in/api/users?page=2';
    let createUserUrl = 'https://reqres.in/api/users';

    getUsers = function () {
        //return a promise
        return ajaxService.makeAjaxRequest('GET', getUsersUrl, null)
    }

    createUser = function (userObject) {       
        return ajaxService.makeAjaxRequest('POST', createUserUrl, userObject);
    }

    //public API
    return {
        getUsers: getUsers,
        createUser: createUser
    };

}();