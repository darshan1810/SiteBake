data = angular.module('myApp.data', []);

data.factory('bio', function bioFactory() {
    return _bio;
});

data.factory('education', function educationFactory() {
    return _education;
});

data.factory('extra', function extraFactory() {
    return _extra;
});

data.factory('workexperience', function workexperienceFactory() {
    return _workexperience;
});

data.factory('projects', function projectsFactory() {
    return _projects;
});

data.factory('webpresence', function webpresenceFactory() {
    return _webpresence;
});

data.factory('skills', function skillsFactory() {
    return _skills;
});
