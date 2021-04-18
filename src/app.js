
var app = function () {

    //private members
    title = 'Structure JavaScript';

    displayTitle = function () {
        alert(this.title);
    }

    displaySite = function () {
        alert('site info...');
    }

    getUsers = function () {

        dataService
            .getUsers()
            .done(function (data) {
                console.log(data);

            }).fail(function (e) {
                console.log('error', e);
            });
    }

    createUser = function (userObj) {

        dataService
            .createUser(userObj)
            .done(function (data) {
                console.log(data);

            }).fail(function (e) {
                console.log('error', e);
            });
    }

    //public API
    return {
        title: title,
        displayTitle: displayTitle,
        getUsers: getUsers,
        createUser: createUser
    };

}();