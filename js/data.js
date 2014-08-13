data = angular.module('myApp.data', []);

data.factory('bio', function bioFactory() {
    return _bio;
});

data.factory('education', function educationFactory() {
    return _education;
});

data.factory('contact', function contactFactory() {
    return _contact;
});
